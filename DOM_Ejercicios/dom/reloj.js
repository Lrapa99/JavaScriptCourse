import alertsPersonalizadas from "./alerts_personalizadas.js";

const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;
  d.querySelector(btnStop).disabled = true;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alertsPersonalizadas("Se Inicio Reloj...", "Play");
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
      d.querySelector(btnStop).disabled = false;
    }
    if (e.target.matches(btnStop)) {
      alertsPersonalizadas("Se Detuvo Reloj...", "Stop", "info");
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnStop).disabled = true;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
export function alarm(sound, btnPlay, btnStop) {
  let alarmTempo;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;
  d.querySelector(btnStop).disabled = true;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alertsPersonalizadas("Se Inicio Alarma...", "Play");
      alarmTempo = setTimeout(() => {
        $alarm.play();
        d.querySelector(btnStop).disabled = false;
      }, 2000);
      e.target.disabled = true;

      setTimeout(() => {
        d.querySelector(btnStop).disabled = true;
        e.target.disabled = false;
      }, $alarm.duration * 1100);
    }

    if (e.target.matches(btnStop)) {
      alertsPersonalizadas("Se Detuvo Alarma...", "Stop", "info");
      clearTimeout(alarmTempo);
      $alarm.pause();
      console.log($alarm, $alarm.currentTime, $alarm.duration);
      $alarm.currentTime = 0;
      d.querySelector(btnStop).disabled = true;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
