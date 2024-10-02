document.addEventListener("DOMContentLoaded", function () {
    // Obtain the language dropdown menu
    const languageToggle = document.getElementById("language-toggle");
  
    // Get the user's preferred language
    const userLang = navigator.language || navigator.userLanguage;
  
    // Detect default language based on browser
    if (userLang.startsWith("es")) {
      setLanguage("es");
    } else if (userLang.startsWith("en")) {
      setLanguage("en");
    } else if (userLang.startsWith("pt")) {
      setLanguage("pt");
    } else if (userLang.startsWith("de")) {
      setLanguage("de");
    } else if (userLang.startsWith("fr")) {
      setLanguage("fr");
    } else if (userLang.startsWith("it")) {
      setLanguage("it");
    } else if (userLang.startsWith("zh")) {
      setLanguage("zh");
    } else if (userLang.startsWith("ar")) {
      setLanguage("ar");
    } else if (userLang.startsWith("ru")) {
      setLanguage("ru");
    } else if (userLang.startsWith("ja")) {
      setLanguage("ja");
    } else if (userLang.startsWith("ko")) {
      setLanguage("ko");
    } else if (userLang.startsWith("hi")) {
      setLanguage("hi");
    } else {
      setLanguage("es"); // Default language if not supported
    }
  
    // Change language on option selection
    languageToggle.addEventListener("change", function () {
      const selectedLanguage = languageToggle.value;
      setLanguage(selectedLanguage);
    });
  
    // Function to show selected language content and hide others
    function setLanguage(lang) {
      const supportedLanguages = ["es", "en", "pt", "de", "fr", "it", "zh", "ar", "ru", "ja", "ko", "hi"];
  
      supportedLanguages.forEach(function (language) {
        const elements = document.querySelectorAll(`.lang-${language}`);
        elements.forEach(function (element) {
          if (language === lang) {
            element.style.display = "block";
            // Update the selected option in the dropdown
            languageToggle.value = lang;  // This line is added
          } else {
            element.style.display = "none";
          }
        });
      });
    }
  });