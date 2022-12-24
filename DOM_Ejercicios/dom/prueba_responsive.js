import alertsPersonalizadas from "./alerts_personalizadas.js";

const d = document,
  w = window;

export default function responsiveTester(form) {
  const $form = d.getElementById(form);
  // console.log($form);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      alertsPersonalizadas("Formulario Enviado");
      e.preventDefault();
      // alert("Formulario enviado");
      tester = w.open(
        $form.direccion.value,
        "tester",
        `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`
      );
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) {
      alertsPersonalizadas(
        `Se ha cerrado la ventana:\n${$form.direccion.value}`,
        "Aviso",
        "info"
      );
      tester.close();
    }
  });
}
