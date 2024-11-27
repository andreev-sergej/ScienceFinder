import re

import pymupdf
from marker.convert import convert_single_pdf
from marker.models import load_all_models


class PDFParser:
    models: list = []

    def parse_pdf(self, path: str) -> str:
        doc = pymupdf.open(path)
        text = " ".join([page.get_text() for page in doc])
        if not re.search("[a-zA-Z]", text):
            return self._use_ocr(path)
        text = text.replace("\n", " ")
        return repr(text)

    @classmethod
    def _use_ocr(cls, path: str) -> str:
        if not hasattr(cls, "models"):
            cls.models = load_all_models()
        text, images, out_meta = convert_single_pdf(path, cls.models)
        return text
