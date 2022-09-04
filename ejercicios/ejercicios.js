import { cadena } from "./1parte.js"; // importamos la constante cadena del modulo 1parte

//*ejercicio 1:
console.log("Ejercicio #1");
function contarCaracteresCadena(valor) {
  console.log(`${cadena} y mi longitud es de ${cadena.length} caracteres`);
}

contarCaracteresCadena(cadena);

//*ejercicio 2:
console.log("Ejercicio #2");
function recortarCadena(valor) {
  const cadenaRecortada = valor.slice(7); //extraemos los datos que deseamos de la cadena completa y guardamos su valor en una nueva variable

  console.log(`Cadena de texto recortada: ${cadenaRecortada}`);
}

recortarCadena(cadena);

//*ejercicio 3:
console.log("Ejercicio #3");
function arrayCadena(valor) {
  const cadenaArreglo = valor.split(" ");

  console.log("Cadena de texto en array:", cadenaArreglo);
}

arrayCadena(cadena);

//*ejercicio 4:
console.log("Ejercicio #4");
function repetirCadena(valor = null) {
  if (valor == null || valor == "") {
    console.log("Por favor ingrese un valor");
  } else {
    console.log("Cadenas repetidas:");
    for (let i = 0; i < 3; i++) {
      console.log(valor);
    }
  }
}

repetirCadena("Hola");
