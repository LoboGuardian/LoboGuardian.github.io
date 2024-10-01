document.addEventListener("DOMContentLoaded", function () {
    // Obtener el menú desplegable de idiomas
    const languageToggle = document.getElementById("language-toggle");

    // Obtener el idioma del navegador
    const userLang = navigator.language || navigator.userLanguage;
    
    // Detectar idioma por defecto basado en el navegador
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
        setLanguage("en"); // Idioma por defecto si el idioma del navegador no está soportado
    }

    // Cambiar idioma cuando se selecciona una opción del menú
    languageToggle.addEventListener("change", function () {
        const selectedLanguage = languageToggle.value;
        setLanguage(selectedLanguage);
    });

    // Función para mostrar el idioma seleccionado y ocultar los demás
    function setLanguage(lang) {
        const supportedLanguages = ["es", "en", "pt", "de", "fr", "it", "zh", "ar", "ru", "ja", "ko", "hi"];;
        
        supportedLanguages.forEach(function (language) {
            const elements = document.querySelectorAll(`.lang-${language}`);
            elements.forEach(function (element) {
                if (language === lang) {
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            });
        });
    }
});