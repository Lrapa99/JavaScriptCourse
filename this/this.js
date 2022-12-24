// console.log("ok");

//!Palabra reservada This en JavaScript👇

//?this hace referencia al objeto global window

// console.log(this);
// console.log(window);

// console.log(this === window); //true, son identicos

//?Asignar variables al window

// this.nombre = "Contexto Global";

// console.log(this.nombre);

// function print() {
//   console.log(this.nombre); //Contexto Global
// }

// print();

// const obj = {
//   nombre: "Contexto Objeto",
//   print: function () {
//     console.log(this.nombre); //Contexto Objeto
//   },
// };

// obj.print();

// const obj2 = {
//   nombre: "Contexto Objeto2",
//   print,
// };

// obj2.print(); //Contexto Objeto2

// const obj3 = {
//   nombre: "Contexto Objeto3",
//   print: () => {
//     console.log(this.nombre); //Contexto Global
//   },
// };

// obj3.print();

//?Las funciones crean su propio contexto,pero las arrow function NO,ellas  quedan con el contexto global

// function Persona(nombre) {
//   this.nombre = nombre;
//   return () => {
//     return console.log(this.nombre, "🤘"); //luis
//   };
// }

//*anteriormente se hacia de esta manera, cuando no existian las arrow functions👇:

// function Persona(nombre) {
//   const that = this;
//   that.nombre = nombre;
//   return function () {
//     return console.log(that.nombre, "🤘"); //luis
//   };
// }

// let rapa = new Persona("luis");
// rapa();

//!Call,Apply,Bind👇

// this.lugar = "Contexto Global";

// function saludar(saludo, aQuien) {
//   console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
// }

// saludar("HOLA", "LRAPA");

// const obj = {
//   lugar: "Contexto Objeto",
// };

// // saludar.call(obj, "Hola", "lrapa");
// saludar.call(null, "Hola", "lrapa");
// saludar.apply(obj, ["Hola", "lrapa"]);
// saludar.apply(this, ["Hola", "lrapa"]);

// this.nombre = "Window";

// const persona = {
//   nombre: "lrapa",
//   saludar: function () {
//     console.log(`Hola ${this.nombre}`);
//   },
// };

// persona.saludar();

// const otraPersona = {
//   saludar: persona.saludar.bind(this),
// };

// otraPersona.saludar();
