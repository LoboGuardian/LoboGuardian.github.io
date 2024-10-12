document.addEventListener("DOMContentLoaded", function () {
  
  const languageToggle = document.getElementById("language-toggle");
  const supportedLanguages = ["es", "en", "pt", "de", "fr", "it", "zh", "ar", "ru", "ja", "ko", "hi"];
  
  // Determine user's preferred language or fallback
  const userLang = navigator.language.split('-')[0];
  const defaultLang = supportedLanguages.includes(userLang) ? userLang : "es";
  
  // Initialize language setting
  setLanguage(defaultLang);
  
  // Event Listener for language change
  languageToggle.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
  
  // Function to set displayed language
  function setLanguage(lang) {
    // Hide all language elements, then show the selected language
    supportedLanguages.forEach((language) => {
      const elements = document.querySelectorAll(`.lang-${language}`);
      elements.forEach((element) => {
        element.style.display = (language === lang) ? "block" : "none";
      });
    });
    
    // Update the dropdown value to selected language
    languageToggle.value = lang;
  }
});
