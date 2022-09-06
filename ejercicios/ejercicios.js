import { cadena } from "./1parte.js"; // importamos la constante cadena del modulo 1parte
import { misConst } from "./2parte.js";

//*ejercicio 1:
console.log("Ejercicio #1");
const contarCaracteresCadena = (valor = "") =>
  !valor
    ? console.warn("Por favor ingrese un valor")
    : console.log(`${valor} y mi longitud es de ${valor.length} caracteres`);

// contarCaracteresCadena();
// contarCaracteresCadena(cadena);

//*ejercicio 2:
console.log("Ejercicio #2");
const recortarCadena = (valor = "", recortar = undefined) =>
  !valor
    ? console.warn("Por favor ingrese un valor")
    : recortar === undefined
    ? console.error(
        "Error, no se ingreso la cantidad de caracteres a recortar "
      )
    : console.log(`Cadena de texto recortada: ${valor.slice(recortar)}`);

//recortarCadena(cadena,4);

//*ejercicio 3:
console.log("Ejercicio #3");
const arrayCadena = (valor = "") =>
  !valor
    ? console.warn("Por favor ingrese un valor")
    : console.log("Cadena de texto en array:", valor.split(" "));

// arrayCadena(cadena);

//*ejercicio 4:
console.log("Ejercicio #4");

const repetirCadena = (valor = "", veces = undefined) => {
  if (!valor) return console.warn("Por favor ingrese un valor");
  if (veces === undefined)
    return console.warn("Debe ingresar el numero de veces a repetir");
  if (veces === 0)
    return console.error(
      "Error, el numero de veces a repetir debe ser mayor a 0"
    );

  for (let i = 1; i <= veces; i++) console.log(valor, i);
};

// repetirCadena('Hello Wordl',5);

//*PARTE NUMERO 2:

//*ejercicio 5:

//console.log(misConst);

const miValor = misConst.cadenaTexto;

const invertirCadena = (valor = "") => {
  if (!valor) return console.warn("Por favor ingrese un valor");

  const separarCadena = valor.split("");

  const invertirCadena = separarCadena.reverse();

  //console.log(invertirCadena);

  const unirCadena = invertirCadena.join("");

  console.log(unirCadena);
};

//invertirCadena(miValor);


//*ejercicio 6:

