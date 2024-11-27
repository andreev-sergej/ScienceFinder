import abc
from typing import Any, TypeVar

import keybert
from keybert import KeyBERT

KeyWordModel = TypeVar("KeyWordModel", bound=keybert.KeyBERT)


class ModelStrategy(metaclass=abc.ABCMeta):
    models: dict[str, Any] = dict()

    @classmethod
    def _setup_model(cls, params_of_model: dict, model: KeyWordModel) -> KeyWordModel:
        if str(params_of_model) not in cls.models:
            cls.models[str(params_of_model)] = model(**params_of_model)
        return cls.models[str(params_of_model)]

    def extract_key_words(self, text: str, params_of_model: dict, params_of_extractor: dict) -> list[tuple[str, float]]:
        raise NotImplementedError()


class KeyBertStrategy(ModelStrategy):
    def extract_key_words(self, text: str, params_of_model: dict, params_of_extractor: dict) -> list[tuple[str, float]]:
        model = self._setup_model(params_of_model, KeyBERT)
        key_words = model.extract_keywords(text, **params_of_extractor)
        return key_words
