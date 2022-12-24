export default function alertsPersonalizadas(
  message = "hola",
  title = "Mensaje",
  type = "success"
) {
  toastr[type](message, title);
}
