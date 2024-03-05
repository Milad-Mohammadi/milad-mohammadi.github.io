const dictionaries = {
  en: () =>
    import("../../dictionaries/en/base.json").then((module) => module.default),
  fa: () =>
    import("../../dictionaries/fa/base.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
  return dictionaries[locale]();
};
