import alertsPersonalizadas from "./alerts_personalizadas.js";

const d = document,
  n = navigator;

export default function webCam(id) {
  const $video = d.getElementById(id);
  // console.log(n.mediaDevices.getUserMedia);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        // console.log(stream);
        $video.mozSrcObject = stream;
        $video.play();
      })
      .catch((err) => {
        alertsPersonalizadas("Permiso Denegado", "WebCam", "error");
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p><mark><b>Sucedio el siguiente error:</b>${err}</mark></p>`
        );
        // console.log(`Sucedio el siguiente error:${err}`);
      });
  }
}
