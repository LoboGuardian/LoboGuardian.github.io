/**
 * @fileoverview Language Toggle Implementation
 * This script manages language switching on the client-side, adapting content based on user preference or browser defaults.
 * It utilizes a dropdown menu to allow users to select from a predefined set of supported languages.
 *
 * @author [LoboGuardian]
 * @version 1.0.0
 * @requires DOMContentLoaded event
 */


document.addEventListener("DOMContentLoaded", () => {
  /**
   * @type {HTMLSelectElement}
   * @description The dropdown element used for language selection.
   */
  const languageToggle = document.getElementById("language-toggle");

/**
   * @type {string[]}
   * @description An array of supported language codes (ISO 639-1).
   */
const supportedLanguages = ["es", "en", "pt", "de", "fr", "it", "zh", "ar", "ru", "ja", "ko", "hi"];

/**
 * @type {string}
 * @description The user's preferred language, determined by the browser's language settings.
 */
const userLang = navigator.language.split("-")[0];

/**
 * @type {string}
 * @description The default language, falling back to 'es' if the user's language is not supported.
 */
const defaultLang = supportedLanguages.includes(userLang) ? userLang : "es";

/**
 * @function initializeLanguage
 * @description Initializes the language setting based on the user's preferred language or the default.
 */
const initializeLanguage = () => {
  setLanguage(defaultLang);
};

/**
 * @function handleLanguageChange
 * @description Event handler for language selection changes.
 * @param {Event} event - The change event object.
 */
const handleLanguageChange = (event) => {
  setLanguage(event.target.value);
};

/**
 * @function setLanguage
 * @description Sets the displayed language by toggling the visibility of language-specific elements.
 * @param {string} lang - The language code to set.
 */
const setLanguage = (lang) => {
  supportedLanguages.forEach((language) => {
    const elements = document.querySelectorAll(`.lang-${language}`);
    elements.forEach((element) => {
      element.style.display = language === lang ? "block" : "none";
    });
  });
  languageToggle.value = lang;
};

// Initialization
initializeLanguage();

// Event Listener
languageToggle.addEventListener("change", handleLanguageChange);
});