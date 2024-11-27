import os.path
from typing import Iterable

from keyword_model.keyword_extract.key_word_extractor import KeyWordExtractor
from keyword_model.keyword_extract.model_strategy import KeyBertStrategy
from keyword_model.pdf_orm_parser.pdf_parser import PDFParser


class Model:
    @staticmethod
    def _validate_path(path):
        if not os.path.exists(path):
            raise ValueError(f"File {path} not exists")
        filename, file_extension = os.path.splitext(path)
        if file_extension != ".pdf":
            raise ValueError("Expected pdf")

    def _extract_text(self, path: str) -> str:
        self._validate_path(path)
        parser = PDFParser()
        return parser.parse_pdf(path)

    def _get_key_words(self, text: str, params_of_extractor: dict) -> list[tuple[str, float]]:
        extractor = KeyWordExtractor()
        key_words = extractor.extract_keywords(text, KeyBertStrategy(), {}, params_of_extractor)
        return key_words

    def _get_keywords_by_length(
        self, text: str, range_of_lengths: Iterable[int], n_top: int
    ) -> list[tuple[str, float]]:
        key_words = []
        for length in range_of_lengths:
            params_of_extractor = {
                "keyphrase_ngram_range": (1, length),
                "top_n": n_top,
                "use_mmr": True,
                "diversity": 0.60,
            }
            curr_length_key_words = self._get_key_words(text, params_of_extractor)
            key_words.extend(curr_length_key_words)
        return sorted(filter(lambda x: x[1] > 0.15, key_words), key=lambda x: x[1], reverse=True)

    def get_key_words(
        self, path: str, length_of_keywords: Iterable[int] = range(1, 4), n_top: int = 5
    ) -> list[tuple[str, float]]:
        text = self._extract_text(path)
        key_words = self._get_keywords_by_length(text, length_of_keywords, n_top)
        return key_words
