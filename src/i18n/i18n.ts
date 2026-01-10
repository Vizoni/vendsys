import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './locales/en/common.json';
import ptBRCommon from './locales/pt-BR/common.json';

const resources = {
  en: {
    common: enCommon,
  },
  'pt-BR': {
    common: ptBRCommon,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: 'common',
  ns: ['common'],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
