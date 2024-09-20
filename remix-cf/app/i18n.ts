import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to Software Showcase",
          "explore": "Explore our curated software products to enhance your productivity and innovation.",
          "home": "Home",
          "about": "About Us",
          // 添加更多翻译
        }
      },
      zh: {
        translation: {
          "welcome": "欢迎来到软件展示网站",
          "explore": "探索我们精选的软件产品，提升您的工作效率和创新能力。",
          "home": "首页",
          "about": "关于我们",
          // 添加更多翻译
        }
      }
    },
    fallbackLng: "zh",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;