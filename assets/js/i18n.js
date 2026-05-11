// =========================
// GLOBAL TRANSLATIONS
// =========================

window.translations = {};

// =========================
// LANGUAGE BUTTONS
// =========================

const languageButtons =
  document.querySelectorAll("[data-lang]");

// =========================
// LOAD LANGUAGE
// =========================

async function loadLanguage(lang) {

  try {

    const response = await fetch(
      `./assets/lang/${lang}.json`
    );

    const translations =
      await response.json();

    // SAVE GLOBAL
    window.translations =
      translations;

    // SAVE CURRENT LANGUAGE
    window.currentLanguage =
      lang;

    // =========================
    // TEXT TRANSLATIONS
    // =========================

    document
      .querySelectorAll("[data-i18n]")
      .forEach(element => {

        const key =
          element.getAttribute(
            "data-i18n"
          );

        if (translations[key]) {

          element.innerHTML =
            translations[key];

        }

      });

    // =========================
    // PLACEHOLDER TRANSLATIONS
    // =========================

    document
      .querySelectorAll(
        "[data-i18n-placeholder]"
      )
      .forEach(element => {

        const key =
          element.getAttribute(
            "data-i18n-placeholder"
          );

        if (translations[key]) {

          element.placeholder =
            translations[key];

        }

      });

    // =========================
    // HTML LANG
    // =========================

    document.documentElement.lang =
      lang;

    // =========================
    // SAVE LOCALSTORAGE
    // =========================

    localStorage.setItem(
      "language",
      lang
    );

  } catch (error) {

    console.error(
      "Error loading translations:",
      error
    );

  }

}

// =========================
// BUTTON EVENTS
// =========================

languageButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const lang =
        button.dataset.lang;

      loadLanguage(lang);

    }
  );

});

// =========================
// AUTO DETECT LANGUAGE
// =========================

const browserLanguage =
  navigator.language.startsWith("es")
    ? "es"
    : "en";

// =========================
// SAVED LANGUAGE
// =========================

const savedLanguage =
  localStorage.getItem("language")
  || browserLanguage;

// =========================
// INIT LANGUAGE
// =========================

loadLanguage(savedLanguage);