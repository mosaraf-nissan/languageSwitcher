import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Corrected typo
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector) // Corrected typo
  .use(initReactI18next) // Initialize React-i18next after i18next
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          greeting: "Welcome to Pixfar",
        },
      },
      fr: {
        translation: {
          greeting: "Bienvenue chez Pixfar",
        },
      },
      hi: {
        translation: {
          greeting: "पिक्सफ़र में आपका स्वागत है",
        },
      },
    },
  });
