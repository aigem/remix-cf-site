import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { CONFIG } from "../config";
import enTranslations from "./locales/en.json";
import zhTranslations from "./locales/zh.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      zh: { translation: zhTranslations },
    },
    lng: CONFIG.DEFAULT_LANGUAGE,
    fallbackLng: CONFIG.DEFAULT_LANGUAGE,
    supportedLngs: CONFIG.SUPPORTED_LANGUAGES,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;