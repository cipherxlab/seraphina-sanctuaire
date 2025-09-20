import { fr } from './fr.js';
import { en } from './en.js';
import { es } from './es.js';
import { pt } from './pt.js';
import { it } from './it.js';
import { de } from './de.js';
import { ru } from './ru.js';
import { hu } from './hu.js';
import { nl } from './nl.js';
import { pl } from './pl.js';
import { zh } from './zh.js';
import { vi } from './vi.js';
import { fil } from './fil.js';
import { ja } from './ja.js';
import { ar } from './ar.js';
import { ur } from './ur.js';
import { sw } from './sw.js';
import { hr } from './hr.js';
import { hi } from './hi.js';
import { ko } from './ko.js';

// Configuration des langues disponibles (20 langues complètes)
export const availableLanguages = [
  { code: 'en', name: 'English', flag: '🇬🇧', native: 'English' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', native: 'Français' },
  { code: 'ar', name: 'العربية', flag: '🇱🇧', native: 'العربية' },
  { code: 'es', name: 'Español', flag: '🇪🇸', native: 'Español' },
  { code: 'pt', name: 'Português', flag: '🇵🇹', native: 'Português' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', native: 'Deutsch' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', native: 'Русский' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺', native: 'Magyar' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱', native: 'Nederlands' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱', native: 'Polski' },
  { code: 'zh', name: '中文', flag: '🇨🇳', native: '中文' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳', native: 'Tiếng Việt' },
  { code: 'fil', name: 'Filipino', flag: '🇵🇭', native: 'Filipino' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', native: '日本語' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰', native: 'اردو' },
  { code: 'sw', name: 'Kiswahili', flag: '🇹🇿', native: 'Kiswahili' },
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷', native: 'Hrvatski' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', native: 'हिन्दी' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', native: 'Italiano' },
  { code: 'ko', name: '한국어', flag: '🇰🇷', native: '한국어' }
];

// Objet contenant toutes les traductions
export const translations = {
  fr,
  en,
  es,
  pt,
  it,
  de,
  ru,
  hu,
  nl,
  pl,
  zh,
  vi,
  fil,
  ja,
  ar,
  ur,
  sw,
  hr,
  hi,
  ko
};

// Langue par défaut
export const defaultLanguage = 'fr';

// Fonction pour obtenir les traductions d'une langue
export const getTranslations = (languageCode) => {
  return translations[languageCode] || translations[defaultLanguage];
};

// Fonction pour vérifier si une langue est supportée
export const isLanguageSupported = (languageCode) => {
  return Object.keys(translations).includes(languageCode);
};

// Fonction pour obtenir la langue du navigateur si supportée
export const getBrowserLanguage = () => {
  const browserLang = navigator.language.split('-')[0];
  return isLanguageSupported(browserLang) ? browserLang : defaultLanguage;
};
