const buttons = document.querySelectorAll(".language-selector button");

async function changeLanguage(lang) {
  const response = await fetch("lang.json");
  const texts = await response.json();

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (texts[lang] && texts[lang][key]) {
      el.innerHTML = texts[lang][key];
    }
  });
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    changeLanguage(lang);
  });
});
