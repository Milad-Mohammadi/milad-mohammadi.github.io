const dictionaries = {
  en: () =>
    import("../../dictionaries/en/common.json").then(
      (module) => module.default
    ),
  fa: () =>
    import("../../dictionaries/fa/common.json").then(
      (module) => module.default
    ),
};

export const getDictionaryCommon = async (locale) => {
  return dictionaries[locale]();
};
