import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationHE from "./locales/he/translation.json";

const savedLang = localStorage.getItem("appLanguage") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    he: { translation: translationHE },
  },
  lng: savedLang, // ✅ Use saved language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
