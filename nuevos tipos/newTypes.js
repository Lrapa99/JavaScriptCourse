//!Symbol👇

// console.log(Symbol());

let id = Symbol("id");
let id2 = Symbol("id2");

// console.log(id === id2);
// console.log(id, id2);
// console.log(typeof id, typeof id2);

//?Crear variable o llavees privados con Symbol()

const PRIVATE_NAME = Symbol("name");
const PRIVATE_SALUDAR = Symbol("saludar");

const person = {
  [PRIVATE_NAME]: "lrapa",
  age: 23,
};

//?Asignar propiedades privadas a un objeto con Symbol(), ya sean llavees o funciones

person.NAME = "luis";
person[PRIVATE_SALUDAR] = () => "Hello que tal, mi name es luis";

//?Invocar llavees de las propiedades privadas de un objeto, con la notacion de corchetes:

// console.log(person);
// console.log(person[PRIVATE_NAME]);
// console.log(person[PRIVATE_SALUDAR]());

//?Esta propiedades privadas no seran detectadas al recorrer todas las propiedades del objeto

// for (let prop in person) {
//   console.log(prop);
//   console.log(person[prop]);
// }

//?Como prodremos lograr que se muestren esa propiedades privadas?...De la siguiente manera:

let getSymbol = Object.getOwnPropertySymbols(person);

// console.log(getSymbol);

//!Sets👇

//?Instanciando un nuevo objeto de Set(),es un arreglo que solo retorna llavees unicos:

const set = new Set([
  1,
  2,
  3,
  4,
  4,
  true,
  true,
  false,
  false,
  {},
  {},
  "hola",
  "HOLA",
]);

// console.log(set);
// console.log(set.size); //longitud o tamaño del arreglo con size

const set2 = new Set();

//?Agregar llavees en los arrlegos con Set():

set2.add(1);
set2.add(3);
set2.add(3);
set2.add(true);
set2.add(true);
set2.add(false);
set2.add({});
set2.add("hola");
set2.add("hola");

// console.log(set2);
// console.log(set2.size);

//?Recorrer los arreglos con Set():

// console.log("Recorriendo set:");

// for (const item of set) {
//   console.log(item);
// }

// console.log("Recorriendo set2:");

// set2.forEach((item) => console.log(item));

//?Convertir los Set() en arrays para poder obtener llavees por medio de sus posiciones:

let arr = Array.from(set);

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

//?Eliminar llavees de los arrlegos con Set():

set.delete("hola"); //eliminando hola del arreglo

// console.log(set);

//?Saber si un llave existe dentro de nuestro arreglo declarado con Set():

// console.log(set.has("HOLA")); //true
// console.log(set.has("hola")); //false

//?Limpiando todo el arreglo :

set2.clear(); //limpiando todo...
// console.log(set2); //arreglo vacio

//!Maps👇

//?Instanciando el objeto Map() no es un objeto primitivo, es un objeto iterador

const map = new Map();

//?Creando propiedades y llavees:

map.set("name", "luis");
map.set("lastname", "rapa");
map.set("age", "23");

// console.log(map);
// console.log(map.size);

//?Comprobando existencia de propiedades:

// console.log(map.has("correo")); //false
// console.log(map.has("name")); //true

//?Buscando propiedades por llave, para obtener su llave:

// console.log(map.get("name"));

//?Cambiando llavees de llaves:

// console.log(map.set("name", "luis enrique")); //luis => luis enrique
// console.log(map);

//?Eliminando llaves:

map.delete("lastname");

// console.log(map); //no existe la llave o propiedad 'lastname'

//?Recorriendo los Maps:

// for (let [key, value] of map) {
//   console.log(`Llave: ${key}, llave: ${value}`);
// }

//*A diferencia de los objetos primitivos, con los Maps prodremos asignar cualquier tipo de dato como llave de los mismos,pe:

map.set(19, "19");
map.set(false, "falso");
map.set({}, {});

// for (let [key, value] of map) {
//   console.log(`Llave: ${key}, llave: ${value}`); //se muestra el objeto con las llaves y llavees establecidos
// }

//?Incializando llavees en un Maps:

const map2 = new Map([
  ["name", "luis"],
  ["age", 23],
  ["hobbies", ["Porgramming", "read", "learning"]],
  [null, "nulo"],
]);

// console.log(map2);

//?Guardando llaves y llavees del Map en variables diferentes:

const keysMaps2 = [...map2.keys()];
const valuesMaps2 = [...map2.values()];

// console.log(keysMaps2);
// console.log(valuesMaps2);

//!WeakSets&WeaksMaps👇

//?Con WeakSet no es posible inicializar el arreglo, se deben ir agregando uno a uno:

const ws = new WeakSet();

let v1 = { v1: 1 };
let v2 = { v1: 2 };
let v3 = { v1: 3 };

//?Agregando llavees, los recibe un forma de objetos

ws.add(v1);
ws.add(v2);
ws.add(v3);

// console.log(ws);

//?Buscando por llaves, devuelve un boolean

// console.log(ws.has(v1)); // true
// console.log(ws.has(v5)); // error, is not defined

//?Eliminando por llaves

ws.delete(v2);

// console.log(ws); // v2 ha sido eliminado

// setInterval(() => {
//   console.log(ws);
// }, 1000);

//?Al ser null las variables, todos los WeakSet se limpian

// setTimeout(() => {
//   v1 = null;
//   v2 = null;
//   v3 = null;
// }, 2000);

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
wm.set(llave3, 3);

// console.log(wm);

// console.log(wm.has(llave1)); //true
// console.log(wm.has(llave5)); //error, is not defined

// console.log(wm.get(llave1));
// console.log(wm.get(llave2));
// console.log(wm.get(llave3));

wm.delete(llave3);
// console.log(wm); // llave3 se ha eliminado

// setInterval(() => {
//   console.log(wm);
// }, 1000);

// setTimeout(() => {
//   llave1 = null;
//   llave2 = null;
//   llave3 = null;
// }, 2000);

//!Iterables&Iterators👇

//?Son estructuras de datos lineales, que pueden ser recorridas, pe: objetos, arreglos,NodeList,Cadenas de texto,etc.

// const iterable = [1, 2, 3, 4, 5];

//?Accedemos al iterador del iterable

// const iterador = iterable[Symbol.iterator]();

// console.log(iterable);
// console.log(iterador);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

// let next = iterador.next();

// while (!next.done) {
//   console.log(next.value);
//   next = iterador.next();
// }

//!Generators👇

//?Podremos convertir a iterable una funcion por gracias a los generators, agregando un * seguido del nombre function

//*yield, es como el return, retorna el valor y detiene la ejecucion

function* iterable() {
  yield "hola";
  console.log("Hola consola");
  yield "hola 2";
  console.log("Seguimos com mas instrucciones de nuestro codigo");
  yield "hola 3";
  yield "hola 4";
}

let iterador = iterable();

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

// for (const y of iterador) {
//   console.log(y);
// }

// const arreglo = [...iterable()]; //guardando los valores en un arreglo

// console.log(arreglo);

function cuadrado(valor) {
  setTimeout(() => {
    return console.log({ valor, result: valor * valor });
  }, Math.random() * 1000);
}

function* generador() {
  console.log("inicia Generator");
  yield cuadrado(0);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  yield cuadrado(5);
  console.log("termina Generator");
}

let gen = generador();

// for (const y of gen) {
//   console.log(y);
// }

//!Proxies👇

const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

//?Manejar los cambios que se le realizan al objeto, por medio de condiciones,e incluso hacer cualquier tipo de validaciones

const manejador = {
  set(obj, prop, valor) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(
        `La propiedad "${prop}" No existe en el objeto persona`
      );
    }
    obj[prop] = valor;
  },
};

// const rapa = new Proxy(persona, manejador);

// rapa.nombre = "luis";
// rapa.apellido = "rapa";
// rapa.edad = 23;
// rapa.face = "lrapa@face";
// console.log(rapa);
// console.log(persona);

//!Propiedades Dinamicas de los Objetos👇

//?Asignaremos dinamicamente los valores de un arreglo  como valores de un objeto

let aleatorio = Math.round(Math.random() * 100 + 5);

const objUsers = {
  propiedad: "valor",
  [`id_${aleatorio}`]: "valor Aleatorio",
};
// console.log(objUsers);

const users = ["luis", "irma", "sheyla", "kala", "maria"];
users.forEach((user, index) => (objUsers[`id_${index}`] = user));

// console.log(objUsers);
