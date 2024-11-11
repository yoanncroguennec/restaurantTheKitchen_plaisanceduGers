"use client";

// import { ThemeProvider } from "acme-theme"; // This should be the Redux provider
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "../constants/translate/en/global.json";
import global_fr from "../constants/translate/fr/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_fr,
    },
  },
});

export function Providers({ children }) {
  return (
    // <ThemeProvider>
    <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
    // </ThemeProvider>
  );
}
