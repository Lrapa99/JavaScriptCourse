const d = document,
  ls = localStorage;

export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  // console.log($selectors);

  let moon = "🌚",
    sun = "🌞";

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    d.querySelector("#countdown").style.backgroundColor = "var(--fondo-color)";
    d.querySelector(".stage").style.backgroundColor = "var(--second-color)";

    d.querySelector("#youtube").childNodes[0].style.color =
      "var(--second-color)";
    d.querySelector("#gmaps").childNodes[0].style.color = "var(--second-color)";
    ls.setItem("theme", "light");
  };

  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    d.querySelector(".stage").style.backgroundColor = "#808b96";
    d.querySelector("#countdown").style.backgroundColor = "#808b96";
    d.querySelector("#countdown").style.color = "var(--second-color)";
    d.querySelector(".p-estado-red").style.color = "var(--second-color)";
    // console.log(d.querySelector("#youtube").childNodes[0]);
    d.querySelector("#youtube").childNodes[0].style.color = "var(--main-color)";
    d.querySelector("#gmaps").childNodes[0].style.color = "var(--main-color)";
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      // console.log($themeBtn.textContent);
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
