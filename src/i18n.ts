import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import XHR from 'i18next-xhr-backend';
import path from 'path';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['jedi', 'menu', 'characters', 'dashboard'],
    backend: {
      backends: [
        LocalStorageBackend, // Primary
        XHR // Fallback
      ],
      backendOptions: [
        {
          prefix: 'i18next_res_', // prefix for stored languages
          expirationTime: 7 * 24 * 60 * 60 * 1000 // expiration 7 days
        },
        {
          loadPath: path.join(__dirname, './locales/{{lng}}/{{ns}}.json'),
          addPath: path.join(__dirname, './locales/{{lng}}/{{ns}}.missing.json')
        }
      ]
    },
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false
    },
    fallbackLng: 'en',
    preload: ['en', 'pt-BR'],
    load: 'currentOnly'
  });

export default i18n;
