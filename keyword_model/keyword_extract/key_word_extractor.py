from keyword_model.keyword_extract.model_strategy import ModelStrategy


class KeyWordExtractor:
    def extract_keywords(
        self,
        text: str,
        model: ModelStrategy,
        params_of_model: dict,
        params_of_extractor: dict,
    ) -> list[tuple[str, float]]:
        return model.extract_key_words(text, params_of_model, params_of_extractor)
