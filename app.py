import os
from crypt import methods
from typing import Any

from flask import Flask, jsonify, render_template, request

from keyword_model.model.model import Model

app = Flask(__name__, template_folder="templates")
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.route("/")
def web() -> Any:
    return render_template("index.html")


@app.route("/upload", methods=["POST"])
def upload_pdf() -> Any:
    if "pdf" not in request.files:
        return jsonify({"message": "No file part"}), 400

    pdf_file = request.files["pdf"]
    if pdf_file.filename is None:
        return jsonify({"message": "No file part"}), 400
    if pdf_file.filename == "":
        return jsonify({"message": "No selected file"}), 400

    if pdf_file and pdf_file.filename.endswith(".pdf"):
        filepath = os.path.join(UPLOAD_FOLDER, pdf_file.filename)
        pdf_file.save(filepath)
        return jsonify({"message": f"File uploaded successfully as {pdf_file.filename}"})
    else:
        return jsonify({"message": "Invalid file type, only PDFs allowed"}), 400


@app.route("/extract", methods=["POST"])
def extract_keywords() -> Any:
    pdf_file = request.files["pdf"]
    if pdf_file.filename is None:
        return jsonify({"message": "No file part"}), 400
    filepath = os.path.join(UPLOAD_FOLDER, pdf_file.filename)
    if not os.path.exists(filepath):
        return jsonify({"message": "File not exist, submit it first"}), 400
    model = Model()
    keywords = model.get_key_words(filepath)
    return jsonify({"message": keywords})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 10000)))
