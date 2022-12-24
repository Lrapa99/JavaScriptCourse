//!WEB APIs👇

//?Interfaz de Programacion de Aplicaciones

// console.log(window);
// console.log(document);

// let texto = "Hola mi nombre es luis rapalino";
// const hablar = (texto) =>
//   speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

// hablar(texto);

//!Introduccion al DOM👇

//?Podremos acceder a todos los nodos del window, por medio de la notacion de punto, como los objetos

// console.log(window.document);
// console.log(document); // todo el documento
// console.log(document.head); //cabecera del documento
// console.log(document.body); //cuerpo del documento
// console.log(document.documentElement); //elemento html
// console.log(document.doctype); //tipo de documento
// console.log(document.characterSet); //UTF-8
// console.log(document.title); //titulo del documento
// console.log(document.links); //links o enlaces en el documento
// console.log(document.images); //imagenes en el documento
// console.log(document.forms); //formularios en el documento
// console.log(document.styleSheets); //hojas de estylos CSS en el documento
// console.log(document.scripts); //scripts enlazados en el documento
// setTimeout(() => {
//   console.log(
//     document.getSelection().toString() ||
//       "No ha seleccionado ningun texto del documento!"
//   ); //seleccionar texto del documento
// }, 3000);

// document.write(`<h2>Hola Mundo desde el DOM</h2>`); //escribir en el documento

//!Nodos,Elementos y Selectores👇

//?Metodos que ya No se suelen utilizar

// console.log(document.getElementsByTagName("li")); //HTMLCollection
// console.log(document.getElementsByClassName("card")); //HTMLCollection
// console.log(document.getElementsByName("nombre")); //NodeList

//?Metodos Actuales

// console.log(document.getElementById("menu")); //Elemento especifico

// console.log(document.querySelector("#menu")); //Elemento especifico, es mas lento que getElementById
// console.log(document.querySelector("a")); //Retorna el primer enlace que encuentre
// console.log(document.querySelectorAll("a")); //NodeList de todos los enlaces en el documento
// document.querySelectorAll("a").forEach((el) => console.log(el)); //Comparten algunos metodos de los arreglos, pero NO todos.

//?Acceder a sus posiciones

// console.log(document.querySelectorAll(".card")[2]);

//?Busquedas dentro de elementos especificos

// console.log(document.querySelectorAll("#menu li")); //NodeList dentro del menu de navegacion

//!Atributos y Data-Attributes👇

//?Accediendo a los atributos del documento HTML , con la notacion del punto

// console.log(document.documentElement.lang);
// console.log(document.querySelector(".link-dom").href); //http://127.0.0.1:5500/DOM/index.html

//?Metodo getAttribute, recomendable

// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.querySelector(".link-dom").getAttribute("href")); //index.html

//?Modificaciones del DOM

// document.documentElement.lang = "es";
// console.log(document.documentElement.lang);
// document.documentElement.setAttribute("lang", "es-MX");
// console.log(document.documentElement.lang);

//?Guardar en variables elementos del DOM, usar 'const' preferiblemente, y usar simbolo del $, para declarar los nombres de las variables

// const $linkDOM = document.querySelector(".link-dom");

// $linkDOM.setAttribute("target", "_blank");
// $linkDOM.setAttribute("rel", "noopener");
// $linkDOM.setAttribute("href", "https://www.google.com/");

//?Comprobar existencia de atributos:

// console
//   .log
//   $linkDOM.hasAttribute("rel") ? "Atributo encontrado!" : "Elemento No existe!"
//   ();

//?Data-Attributes

// console.log($linkDOM.getAttribute("data-description")); //obtener datos de los atributos
// console.log($linkDOM.dataset); //Se almacenan todos los datos, 'data-' declarados como atributos
// console.log($linkDOM.dataset.description); //obtener datos de los atributos
// $linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");

// console.log($linkDOM.getAttribute("data-description")); //obtener datos de los atributos

// $linkDOM.dataset.description =
// ("Modelo de Objeto del Documento, Notacion del punto");

// console.log($linkDOM.getAttribute("data-description")); //obtener datos de los atributos

// console.log($linkDOM.hasAttribute("data-id"));

// $linkDOM.setAttribute("data-id", "data-id");
//
// console.log($linkDOM.hasAttribute("data-id"));

// console.log($linkDOM.getAttribute("data-id"));

//!Estilos y Variables CSS👇

// const $linkDOM = document.querySelector(".link-dom");

// console.log($linkDOM.style); //Propiedades CSS,mapeo completo

// console.log($linkDOM.getAttribute("style")); //Propiedades CSS, solo valores

// console.log($linkDOM.style.backgroundColor); //Propiedades CSS
// console.log($linkDOM.style.color); //Propiedades CSS
// console.log(getComputedStyle($linkDOM)); // Todas las propiedades disponibles en CSS,como lo interpreta el navegador
// console.log(getComputedStyle($linkDOM).getPropertyValue("color")); //Obtener valor de la propiedad CSS

//?Establecer valores:

// $linkDOM.style.setProperty("text-decoration", "none");
// $linkDOM.style.setProperty("display", "block");
// $linkDOM.style.width = "50%";
// $linkDOM.style.textAlign = "center";
// $linkDOM.style.marginLeft = "auto";
// $linkDOM.style.marginRight = "auto";
// $linkDOM.style.padding = "1rem";
// $linkDOM.style.borderRadius = ".5rem";

// console.log($linkDOM.style); //Propiedades CSS,mapeo completo
// console.log($linkDOM.getAttribute("style")); //Propiedades CSS, solo valores
// console.log(getComputedStyle($linkDOM)); // Todas las propiedades disponibles en CSS,como lo interpreta el navegador

//?Variables CSS Custom Properties CSS:

// const $html = document.documentElement,
//   $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
//   varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(varDarkColor, varYellowColor);

// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// $html.style.setProperty("--dark-color", "#000");
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// $body.style.setProperty("background-color", varDarkColor);

//!Clases CSS👇

// const $card = document.querySelector(".card");

// console.log($card);
// console.log($card.className); //Nombre de la clase
// console.log($card.classList); //TokenList
// console.log($card.classList.contains("rotate-45")); //true o false
// $card.classList.add("rotate-45");
// console.log($card.classList.contains("rotate-45")); //true o false
// $card.classList.remove("rotate-45");
// console.log($card.classList.contains("rotate-45")); //true o false
// $card.classList.toggle("rotate-45"); //palanca, quita o agrega la clase
// console.log($card.classList.contains("rotate-45")); //true o false
// $card.classList.toggle("rotate-45"); //palanca, quita o agrega la clase
// console.log($card.classList.contains("rotate-45")); //true o false
// $card.classList.toggle("rotate-45"); //palanca, quita o agrega la clase
// $card.classList.replace("rotate-45", "rotate-135"); //remplazar clase por otra
// $card.classList.add("opacity-80", "sepia"); //agregando varias clases a la vez
// $card.classList.remove("opacity-80", "sepia"); //eliminando varias clases a la vez
// $card.classList.toggle("opacity-80", "sepia"); //palanca, quita o agrega varias clases a la vez
// $card.classList.toggle("opacity-80", "sepia"); //palanca, quita o agrega varias clases a la vez

//!Texto y HTML👇

const $whatIsDOM = document.getElementById("que-es");

let text = `<p>
  El Modelo de Objetos del Documento (
  <b>
    <i>DOM - Document Objet Model</i>
  </b>
  )es un API para documento HTML Y XML
</p>
<p>
  Este provee una representacion estructural del documento, permitiendo
  modificar su contenido y su presentacion visual mediente codigo JS
</p>
<p>
  <mark>
    EL DOM no es parte de la especificacion de JavaScript, es una API para los
    navegadores.
  </mark>
</p>`;

// $whatIsDOM.innerText = text; //No recomendable, no forma parte del estandar
// $whatIsDOM.textContent = text; //Esta es la estandar, pero no interpreta las etiquetas HTML, solo texto
// $whatIsDOM.innerHTML = text; //Esta si interpreta codigo HTML,texto y html
$whatIsDOM.outerHTML = text; //reemplaza la etiqueta contenedora

//!Traversing: Recorriendo el DOM👇

//?Esta enfocado para los nodos de tipo elemento HTML

// const $cards = document.querySelector(".cards");

// console.log($cards);
// console.log($cards.children); //HTMLCollections,Hijos
// console.log($cards.children[2]); //Hijo en la posicion 2
// console.log($cards.parentElement); //Retorna el elemento padre
// console.log($cards.firstElementChild); //Retorna el primer hijo
// console.log($cards.lastElementChild); //Retorna el ultimo hijo
// console.log($cards.previousElementSibling); //Retorna el hermano anterior
// console.log($cards.nextElementSibling); //Retorna el hermano siguiente
// console.log($cards.closest("div")); //Retorna el ancestro mas cercano
// console.log($cards.closest("body")); //Retorna el ancestro mas cercano
// console.log($cards.children[3].closest("section")); //Retorna el ancestro mas cercano

//!Creando Elementos y Fragmentos👇

//?Creando Nodos y Elementos de Uno por Uno

// const $figure = document.createElement("figure"),
//   $img = document.createElement("img"),
//   $figcaption = document.createElement("figcaption"),
//   $figcaptionText = document.createTextNode("Animals"),
//   $cards = document.querySelector(".cards"),
//   $figure2 = document.createElement("figure");

// $img.setAttribute("src", "https://placeimg.com/200/200/animals");
// $img.setAttribute("alt", "Animals");
// $figure.classList.add("card");
// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards.appendChild($figure);

// $figure2.innerHTML = `
// <img src="https://placeimg.com/200/200/people" alt="People" />
// <figcaption>People</figcaption>
// `;
// $figure2.classList.add("card");
// $cards.appendChild($figure2);

//?Creando Nodos y Elementos por lotes

// const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
//   $ul = document.createElement("ul");

// document.write("<h3>Estaciones del Año</h3>");

// document.body.appendChild($ul);

// estaciones.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $ul.appendChild($li);
// });

// const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
//   $ul2 = document.createElement("ul");

// document.write("<h3>Continentes del Mundo</h3>");

// document.body.appendChild($ul2);

//?Con innerHTML

// $ul2.innerHTML = ""; //es recomendable inicializar

// continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

//?Utilizando fragmentos, la forma mas optima para pintar elementos a DOM de manera masiva

// const meses = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Obtubre",
//     "Noviembre",
//     "Diciembre",
//   ],
//   $ul3 = document.createElement("ul"),
//   $fragment = document.createDocumentFragment();

// meses.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $fragment.appendChild($li);
// });

// document.write("<h3>Meses del Año</h3>");
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);

//!Templates HTML👇

// const $cards = document.querySelector(".cards"),
//   $template = document.getElementById("template-card").content,
//   $fragment = document.createDocumentFragment(),
//   cardContent = [
//     { title: "Tecnologia", img: "https://placeimg.com/200/200/tech" },
//     { title: "Animales", img: "https://placeimg.com/200/200/animals" },
//     { title: "Arquitectura", img: "https://placeimg.com/200/200/arch" },
//     { title: "Gente", img: "https://placeimg.com/200/200/people" },
//   ];

// cardContent.forEach((el) => {
//   $template.querySelector("img").setAttribute("src", el.img);
//   $template.querySelector("img").setAttribute("alt", el.title);
//   $template.querySelector("figcaption").textContent = el.title;

//   let $clone = document.importNode($template, true); //Copiar toda la estructura completa

//   $fragment.appendChild($clone);
// });

// $cards.appendChild($fragment);

//!Modificando Elementos (Old Style)👇

// const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure"),
//   $cloneCard = $cards.cloneNode(true);

// $newCard.innerHTML = `
// <img src="https://placeimg.com/200/200/any" alt="Any" />
// <figcaption>Any</figcaption>
// `;

// $newCard.classList.add("card");

// $cards.replaceChild($newCard, $cards.children[2]);
// $cards.insertBefore($newCard, $cards.firstElementChild);
// $cards.removeChild($cards.lastElementChild);
// document.body.appendChild($cloneCard);

//!Modificando Elementos (Cool Style)👇

//?insertAdjacent...
//?insertAdjacentElement(position,el)
//?insertAdjacentHTML(position,html)
//?insertAdjacentText(position,text)

//?Posiciones:
//?beforebegin(hermano anterior)
//?afterbegin(primer hijo)
//?beforeend(ultimo hijo)
//?afterend(hermano siguiente)

// const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure");

// $newCard.innerHTML = `
// <img src="https://placeimg.com/200/200/any" alt="Any" />
// <figcaption>Any</figcaption>
// `;

// let $contentCard = `
// <img src="https://placeimg.com/200/200/any" alt="Any" />
// <figcaption></figcaption>
// `;

// $newCard.classList.add("card");

// $cards.insertAdjacentElement("beforebegin", $newCard);
// $cards.insertAdjacentElement("afterbegin", $newCard);
// $cards.insertAdjacentElement("beforeend", $newCard);
// $cards.insertAdjacentElement("afterend", $newCard)

// $newCard.insertAdjacentHTML("beforeend", $contentCard);
// $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

// $cards.prepend($newCard);
// $cards.before($newCard);
// $cards.append($newCard);
// $cards.after($newCard);

//!Manejadores de Eventos👇

//?Evento con atributo HTML

const holaMundo = () => {
  alert("Hola");
  console.log(event);
};

//?Evento con manejador semantico

const $eventoSemantico = document.getElementById("evento-semantico");

//?No se pueden asignar diferentes funciones a un mismo evento. Solo se reemplaza su valor

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = (e) => {
  alert("Hola mundo");
  console.log(e);
};

//?Evento con manejador multiple

function saludar(name = "Desconocido") {
  alert(`Hola ${name}`);
  console.log(event);
}

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Manejador de Eventos Multiples");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});

// $eventoMultiple.addEventListener("click", saludar);
$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("rapa");
});

//?Removiendo Eventos con manejadores multiples

const $eventoRemover = document.getElementById("evento-remover");

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};

// $eventoRemover.addEventListener("dblclick", (e) => {
//   alert(`Removiendo el evento de tipo ${e.type}`);
//   console.log(e);
//   $eventoRemover.removeEventListener("dblclick");
// });

$eventoRemover.addEventListener("dblclick", removerDobleClick);

//!Flujo de Eventos (Burbuja y Captura), stopPropagation & preventDefault👇

// const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
//   $linkEventos = document.querySelector(".eventos-flujo a");

// function flujoEventos(e) {
//   console.log(
//     `Hola te saluda ${this.className}, el click lo origino ${
//       e.target.className || "Not click in div"
//     }`
//   );
//   e.stopPropagation();
// }

// console.log($divsEventos);

// $divsEventos.forEach((div) => {
//Fase de burbuja
// div.addEventListener("click", flujoEventos);
// div.addEventListener("click", flujoEventos, false);
//Fase de captura
// div.addEventListener("click", flujoEventos, true);
// div.addEventListener("click", flujoEventos, {
//   capture: false,
//   once: true, //ejecuta una sola vez, remueve los eventos
// });
// });

// $linkEventos.addEventListener("click", (e) => {
//   alert("Hola ");
//   e.preventDefault();
//   e.stopPropagation();
// });

//!Delegación de Eventos👇

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${e.target.className}, el click lo origino ${
      e.target.className || "Not click in div"
    }`
  );
  e.stopPropagation();
}

document.addEventListener("click", (e) => {
  console.log("Click en", e.target);
  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }
  if (e.target.matches(".eventos-flujo a")) {
    alert("hola");
    e.preventDefault();
  }
});

//!BOM:Propiedades y Eventos👇

// window.addEventListener("resize", (e) => {
//   console.clear();
//   console.log("Evento Resize");
//   console.log(window.innerWidth);
//   console.log(window.innerHeight);
//   console.log(window.outerWidth);
//   console.log(window.outerHeight);
//   console.log(e);
// });

// window.addEventListener("scroll", (e) => {
//   console.clear();
//   console.log("Evento Scroll");
//   console.log(window.scrollX);
//   console.log(window.scrollY);
//   console.log(e);
// });

// window.addEventListener("load", (e) => {
//   console.log("Evento Load");
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// });

// //?Mas recomendable, por ser mas optimo

// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log("Evento DOMContentLoaded");
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// });

//!BOM:Metodos👇

// window.alert("Hola")
// window.confirm("Hola");
// window.prompt("Aviso");

const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventanaOpen;

$btnAbrir.addEventListener("click", (e) => {
  ventanaOpen = window.open("https://jonmircha.com/");
});

$btnCerrar.addEventListener("click", (e) => {
  // window.close(); //cierra la ventana actual
  ventanaOpen.close();
});

$btnImprimir.addEventListener("click", (e) => {
  window.print();
});

//!BOM: Objetos: URL, Historial y Navegador👇

// console.log(window.location);
// console.log(window.location.origin);
// console.log(window.location.protocol);
// console.log(window.location.host);
// console.log(window.location.hostname);
// console.log(window.location.port);
// console.log(window.location.href);
// console.log(window.location.hash);
// console.log(window.location.search);
// console.log(window.location.pathname);

// console.log(window.history);
// console.log(window.history.length);
// console.log(window.history.back());
// console.log(window.history.go());
// console.log(window.history.forward());

// console.log(window.navigator);
// console.log(window.navigator.geolocation);
// console.log(window.navigator.mediaDevices);
// console.log(window.navigator.onLine);
// console.log(window.navigator.serviceWorker);
// console.log(window.navigator.storage);
// console.log(window.navigator.userAgent);
