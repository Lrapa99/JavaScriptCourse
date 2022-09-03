// console.log(console);
// console.error("Esto es un error personalizado");
// console.warn("Esto es un aviso");
// console.info("Esto es un mensaje informativo");
// console.log("Un registro de lo que esta pasando en nuestra app");

// let name = "Luis",
//   lastname = "Rapalino",
//   age = 23;

// //podremos mostrar por consola un registro de los datos de manera individual, uno debajo del otro
// console.log(name);
// console.log(lastname);
// console.log(age);

// //para mostrar por consola los registros de manera grupal, debemos separar por comas, y se mostraran en una sola linea
// console.log(name, lastname, age);

// //mostrando por consola los valores de las variables con la interpolacion, se deben usar estas comillas (``)

// console.log(`Hello, my name is ${name} ${lastname}, and have ${age} year old`);

// //aplicando los comodines, que pueden ser reemplazados al final de la cadena, por las variables a mostrar

// console.log(
//   `Hello , my name is %s %s , and have %d year old`,
//   name,
//   lastname,
//   age
// );

// //prodremos limpiar la consola, por medio del siguiente metodo del objeto console
// console.clear();

// console.log(window);

// console.log(document);
// console.dir(window);
// console.dir(document);

// console.clear();

// //agrupar o hacer listas por medio de la consola
// console.group("Esto es una lista, en la consola");
// console.log("elemento 1 ");
// console.log("elemento 2");
// console.log("elemento 3");
// console.groupEnd(); //finalizamos el listado
// console.clear();

// //organizar o mostrar en una tabla, los datos por consola
// console.log(console);
// console.table(Object.entries(console).sort());
// console.clear();

// //organizar en tabla un  array
// const numeros = [1, 2, 3, 4, 5],
//   vocales = ["a", "e", "i", "o", "u"];

// console.table(numeros);
// console.table(vocales);

// //organizar en tabla un objeto
// const dog = {
//   name: "Lucifer",
//   raza: "Boxer",
//   color: "Negro",
// };

// console.table(dog);

// console.clear();

// //podremos saber cuanto tiempo tarda en ejecutar nuestro codigo, por medio de este metodo
// console.time("Cuanto tiempo tarda mi codigo"); //iniciamos y asignamos un alias
// const arr = Array(100);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = i;
// }
// console.timeEnd("Cuanto tiempo tarda mi codigo"); //finalizamos, con el mismo alias

// console.log(arr); //mostramos los resultados
// console.clear();

// //contar cuantas veces ejecutamos cierto codigo
// for (let i = 0; i <= 100; i++) {
//   console.count("Codigo for");
//   console.log(i);
// }

// console.clear();

// //haciendo test con la consola, y evaluando codigo
// const x = 3,
//   y = 2,
//   testxy = "Se espera que (x) siempre sea menor que (y))";

// console.assert(x < y, { x, y, testxy });

// console.clear();

// //objeto date

// console.log(Date());

// const fecha = new Date(); //almacenamos Date() en una variable

// console.log(fecha);

// //obtener dia del mes
// console.log(fecha.getDate());

// //obtener dia de la semana D L M MI J V S -> 0 1 2 3 4 5 6
// console.log(fecha.getDay());

// //obtener mes (Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11)
// console.log(fecha.getMonth());

// //obtener el año
// console.log(fecha.getFullYear());

// //obtener horas, minutos, segundos y milisegundos, en formato 24 hrs
// console.log(fecha.getHours());
// console.log(fecha.getMinutes());
// console.log(fecha.getSeconds());
// console.log(fecha.getMilliseconds());

// //metodo para Date()
// console.log(fecha.toString());
// console.log(fecha.toDateString());
// console.log(fecha.toLocaleString());
// console.log(fecha.toLocaleDateString());
// console.log(fecha.toLocaleTimeString());
// console.log(fecha.getTimezoneOffset());
// console.log(fecha.getUTCDate());
// console.log(fecha.getUTCHours());
// console.log(Date.now()); //time standard

// //saber cuando naci, aplicando  Date()
// const happy = new Date(1999, 6, 3);
// console.log(happy);
// console.clear();

// //Mis test

// class Animal {
//   constructor(name, genero, size) {
//     this.name = name;
//     this.genero = genero;
//     this.size = size;
//   }
//   saludar() {
//     console.log(
//       `Hola soy ${this.name}, mi genero es ${this.genero} y tengo un tamano ${this.size}`
//     );
//   }
// }

// const gato = new Animal("pacho", "macho", "mediano");

// console.log(gato);

// for (const props in gato) {
//   console.log(props);
// }

// const myArreglo = [];

// myArreglo.push(gato);

// console.log(myArreglo[0].name);
// console.log(myArreglo[0].genero);
// console.log(myArreglo[0].size);

// console.table(myArreglo); //*mostramos en una tabla el arreglo

// const saludo = myArreglo[0].saludar(); //almacenamos el valor en una variable

// console.clear(); //limpiamos la consola

// //* objeto estatico Math, y algunos metodos importantes

// console.log(Math);
// console.log(Math.PI); //numeros absolutos
// console.log(Math.abs(-7.8)); //valor absoluto, sin importar si es un numero negativo
// console.log(Math.ceil(7.8)); //* redondear valores flotantes, al numero entero mayor
// console.log(Math.floor(7.8)); //* redondear valores flotantes, al numero entero menor
// console.log(Math.round(7.2)); //* redondear valores flotantes, al numero mas cercano

// console.log(Math.sqrt(81)); //*sacar raiz cuadrada con Math
// console.log(Math.pow(2, 5)); //* calcular potencia
// console.log(Math.sign(5)); //*valor absoluto, me indicara si el valor es positivo(1), negativo(-1) o cero(0)
// console.log(Math.sign(-87)); //*valor absoluto, me indicara si el valor es positivo(1), negativo(-1) o cero(0)
// console.log(Math.sign(0)); //*valor absoluto, me indicara si el valor es positivo(1), negativo(-1) o cero(0)

// console.log(Math.random()); //! nos arroja un valor aleatorio
// console.log(Math.random() * 100); //* operacion matematica con el valor aleatorio

// console.log(Math.round(Math.random() * 1000)); //! redondear numeros aleatorios multiplicados por 1000

// console.clear();

// //* operador de cortocircuito
// /* Cortocircuito con OR-- cuando el valor de la izquierda en la
// expresion siempre pueda validar a TRUE , es el valor que se
// cargara por defecto

//   Cortocircuito con AND-- cuando el valor de la izquierda en la
//   expresion siempre pueda validar a FALSE, es el valor que se
//   cargara por defecto
//  */

// function saludando(youName) {
//   youName = youName || "Desconocido"; //! cortocircuito OR
//   console.log(`Hello, my name is ${youName}`);
// }

// saludando(); // Hello, my name is Desconocido
// saludando("Lrapa99"); // Hello, my name is Lrapa99

// //* VALORES QUE TIENDES A VERDADERO

// console.log("Esto es una cadena" || "Valor de la derecha");
// console.log(19 || "Valor de la derecha");
// console.log(true || "Valor de la derecha");
// console.log([] || "Valor de la derecha");
// console.log({} || "Valor de la derecha");
// console.log(19 || "Valor de la derecha");
// console.log(-2 || "Valor de la derecha");

// //* VALORES QUE TIENDES A FALSO

// console.log(false && "Valor de la derecha");
// console.log(null && "Valor de la derecha");
// console.log(undefined && "Valor de la derecha");
// console.log("" && "Valor de la derecha");
// console.log(0 && "Valor de la derecha");

// console.clear();

//* Alert, Confirm y Prompt

//console.log(window);

// const opciones = {
//   alerta: () =>
//     window.alert("Hola esto es una alerta, por favor ingresa un valor"),
//   confirm: () =>
//     window.confirm(
//       "Hola esto es una confirmacion, por favor confirma para continuar"
//     ),
//   miValor: () =>
//     window.prompt(
//       "Hola este es un prompt y le permite al usuario ingresar un valor"
//     ),
// };

// //! esto es un ejemplo (no es necesario escribir el nombre del objeto global window para poder acceder a estos metodos)

// console.log(opciones); //mostramos el objeto

// window.alert("Bienvenido"); //mensaje de bienvenida

// opciones.alerta(); //mostramos una alerta

// const miNombre = "Luis"; //almacenamos en una variable mi nombre

// const valorCapturado = opciones.miValor(); //mostramos un prompt para capturar el valor

// if (valorCapturado) {

//   const confirmacion = opciones.confirm(); // mostramos la confirmacion

// if (confirmacion) {
//   if (valorCapturado === miNombre) {
//     window.alert(`Hola que tal, acabas de ingresar el valor correcto!!`);
//   } else {
//     window.alert(`Valor incorrecto!!`);
//   }
// } else {
//   window.alert('Operacion Abortada!!')
// }

// } else {
//   window.alert('Operacion Abortada!!')
// }

// const alerta = alert('Hola, esto es una alerta'),
// confirmacion = confirm('Hola, esto es una confirmacion'),
// aviso = prompt('Hola, esto es un aviso y le permite al usuario ingresar un valor')

// console.log(alerta);
// console.log(confirmacion);
// console.log(aviso);

//* expresiones regulares
/*son una secuencia de caracteres que forman un patron
de busqueda principalmente utilizada para la 
busquedad de pratrones de cadenas de caracteres */

// const cadena =
//   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem accusantium odio molestiae sunt temporibus repellat, tenetur eius quasi ipsum. Molestias dolore a odio obcaecati aliquam sed cupiditate omnis itaque iste?";

// const expReg = new RegExp('lorem','i'); // el segundo parametro, son las banderas, que nos permiten hacer una especie de filtro sobre la busquedad
// const expReg2 = /lorem/i // forma mas utilizada por los dev

// console.log(expReg.test(cadena)); // devuelve un boolean true o false
// console.log(expReg.exec(cadena));// devuelve un arreglo con mas informacion
// console.log(expReg2.test(cadena)); // devuelve un boolean true o false
// console.log(expReg2.exec(cadena));// devuelve un arreglo con mas informacion

//funcion anonima autoejecutable

//alert('Soy una funcion que se autoejecuta')


// (function(){
// console.log('Mi primer IIFE');
// })(); // si hay varias funciones anonimas autoejecutables , es importante que terminemos con puntos y comas (;)

// (function (d,w,c){
//   console.log('Soy una funcion autoejecutable, que para funcionar me deben poner dentro de parentesis');
//   console.log(d);
//   console.log(w);
//   c.log('Este es un console.log')
//   w.alert('Esta es una alerta')
// })(document,window,console);

