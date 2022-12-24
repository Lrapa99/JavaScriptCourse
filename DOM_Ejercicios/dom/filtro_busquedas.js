const d = document;

export default function searchFilters(input, selector) {
  const $div = d.createElement("div");
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      // console.log(e.key);
      // console.log(e.target.value);
      // console.log(d.querySelectorAll(selector));
      if (e.key === "Escape") e.target.value = "";
      let empty = [];
      d.querySelectorAll(selector).forEach((el) => {
        if (el.textContent.toLowerCase().includes(e.target.value)) {
          el.classList.remove("filter");
        } else {
          el.classList.add("filter");
        }

        el.classList.contains("filter") ? empty.push(true) : empty.push(false);

        return empty;
      });

      $div.textContent = "Sin Resultados❌";
      d.querySelector(".card-filter").insertAdjacentElement("afterend", $div);

      if (empty.includes(false)) {
        $div.classList.remove("is-empty");
        $div.classList.add("filter");
      } else {
        $div.classList.add("is-empty");
        $div.classList.remove("filter");
      }
    }
  });
}
