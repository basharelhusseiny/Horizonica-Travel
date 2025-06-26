const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  de: () => import("./de.json").then((module) => module.default),
  fr: () => import("./fr.json").then((module) => module.default),
  es: () => import("./es.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
  if (!locale || !dictionaries[locale]) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  return dictionaries[locale]();
};
