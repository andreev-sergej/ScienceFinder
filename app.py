from flask import Flask, render_template, request, jsonify
import os

app = Flask(__name__, template_folder='templates')
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
  
@app.route("/")  
def web():  
    return render_template('index.html')

@app.route("/upload", methods=["POST"])
def upload_pdf():
    if "pdf" not in request.files:
        return jsonify({"message": "No file part"}), 400
    
    pdf_file = request.files["pdf"]
    if pdf_file.filename == "":
        return jsonify({"message": "No selected file"}), 400
    
    if pdf_file and pdf_file.filename.endswith(".pdf"):
        filepath = os.path.join(UPLOAD_FOLDER, pdf_file.filename)
        pdf_file.save(filepath)
        return jsonify({"message": f"File uploaded successfully as {pdf_file.filename}"})
    else:
        return jsonify({"message": "Invalid file type, only PDFs allowed"}), 400
  
if __name__ == "__main__":  
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 10000)))