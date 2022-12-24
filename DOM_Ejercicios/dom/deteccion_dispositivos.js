const d = document,
  n = navigator,
  ua = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.ie() ||
          this.edge()
        );
      },
    };

  // console.log(ua);
  //?Mobile
  // console.log(isMobile.android());
  // console.log(isMobile.ios());
  // console.log(isMobile.windows());
  // console.log(isMobile.any());

  //?Desktop
  // console.log(isDesktop.linux());
  // console.log(isDesktop.mac());
  // console.log(isDesktop.windows());
  // console.log(isDesktop.any());

  //?Browser
  // console.log(isBrowser.chrome());
  // console.log(isBrowser.safari());
  // console.log(isBrowser.firefox());
  // console.log(isBrowser.opera());
  // console.log(isBrowser.ie());
  // console.log(isBrowser.edge());
  // console.log(isBrowser.any());

  $id.innerHTML = `
  
  <ul>
  <li>User Agent: <b>${ua}</b></li>
  <li>Plataforma: <b>${
    isMobile.any() ? isMobile.any() : isDesktop.any()
  }</b></li>
  <li>Navegador: <b>${isBrowser.any()}</b></li>
  </ul>
  
  `;

  //? Contenido exclusivo segun navegador:

  if (isBrowser.chrome())
    $id.innerHTML += `<p><mark>Este contenido solo se ve en <b>Chrome</b><mark/></p>
    <img style="border-radius: 6rem 6rem .5rem .5rem" src="https://placeimg.com/200/200/tech" alt="Tech">
    `;

  if (isBrowser.firefox())
    $id.innerHTML += `<p><mark>Este contenido solo se ve en <b>Firefox</b><mark/></p>
   <img style="border-radius: 6rem" src="https://placeimg.com/200/200/animals" alt="Animals">`;

  //?Redirecciones:

  // if (isMobile.android()) window.location.href = "https://www.youtube.com/";
}
