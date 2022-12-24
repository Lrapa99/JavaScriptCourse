import alertsPersonalizadas from "./alerts_personalizadas.js";

const d = document,
  w = window,
  n = navigator;

export default function networkStatus(id) {
  const isOnline = () => {
    // const $div = d.createElement("div");
    // if (n.onLine) {
    //   $div.textContent = "Conexion Restablecida";
    //   $div.classList.add("online");
    //   $div.classList.remove("offline");
    // } else {
    //   $div.textContent = "Conexion Perdida";
    //   $div.classList.add("offline");
    //   $div.classList.remove("online");
    // }
    // d.body.insertAdjacentElement("afterbegin", $div);
    // setTimeout(() => {
    //   d.body.removeChild($div);
    // }, 5000);

    const $id = d.getElementById(id);
    // console.log($id);

    if (n.onLine) {
      alertsPersonalizadas(
        "Se restableció la conexión a internet",
        "Estado de Red"
      );
      $id.innerHTML = `<div class="inner-online">Conexión Restablecida🚀</div>`;
    } else {
      alertsPersonalizadas(
        "Se ha perdido la conexión a internet",
        "Error de Red",
        "error"
      );
      $id.innerHTML = `<div class="inner-offline">Conexión Perdida😩</div>`;
    }
    setTimeout(() => {
      $id.innerHTML = ``;
    }, 5000);
  };

  w.addEventListener("online", (e) => isOnline());

  w.addEventListener("offline", (e) => isOnline());
}
