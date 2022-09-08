import { cadena } from "./1parte.js"; // importamos la constante cadena del modulo 1parte
import { misConst } from "./2parte.js";

//*ejercicio 1:

const contarCaracteresCadena = (valor = "") =>
  !valor
    ? console.warn("Por favor ingrese un valor")
    : console.log(`${valor} y mi longitud es de ${valor.length} caracteres`);

// contarCaracteresCadena();
// contarCaracteresCadena(cadena);

//*ejercicio 2:

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

const arrayCadena = (valor = "") =>
  !valor
    ? console.warn("Por favor ingrese un valor")
    : console.log("Cadena de texto en array:", valor.split(" "));

// arrayCadena(cadena);

//*ejercicio 4:

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

const cadenaRepetida = misConst.cadenaRepetida;

const contarPalabrasRepetidas = (palabras = "", busquedad = undefined) => {
  let contador = 0;
  let posicion = 0;

  if (!palabras) return console.warn("Debe ingresar una cadena de texto");
  if (busquedad === undefined || !busquedad)
    return console.error("No ingreso el valor de busquedad para contar");

  while ((posicion = palabras.indexOf(busquedad, posicion)) !== -1) {
    ++contador;

    posicion += busquedad.length;
  }

  return console.log(
    `La palabra "${busquedad}" ${
      contador === 0
        ? `NO existe`
        : `se repite ${contador} ${contador === 1 ? `vez` : `veces`}`
    } `
  );
};

//contarPalabrasRepetidas(cadenaRepetida,'mundo');

//*ejercicio 7:

const palindromo = misConst.palindromo;

const getPalindromo = (str = "") => {
  if (!str) return console.warn("Por favor ingresa un valor");

  let respuesta = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(respuesta, "");
  let reverseStr = lowRegStr.split("").reverse().join("");

  console.log(`Inicial: ${lowRegStr}`);
  console.log(`Final: ${reverseStr}`);

  return console.log(`Valor de Palindromo:`, reverseStr === lowRegStr);
};

// getPalindromo(palindromo);

//*ejercicio 8:

const eliminarCaracteres = misConst.eliminarCaracteres;

const deleteCaracter = (str, palabraBusquedad) => {
  if (!str) return console.warn("Por favor ingresa un valor");

  if (!palabraBusquedad)
    return console.error("No ingreso el patron a eliminar");

  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const reg = new RegExp(escapeRegExp(palabraBusquedad), "g");

  //console.log(reg);

  const nuevaStr = str.replace(reg, "");

  console.log(`Cadena inicial: ${eliminarCaracteres}`);
  console.log(`Valor eliminado: "${palabraBusquedad}"`);
  console.log(`Cadena final: ${nuevaStr}`);
};

// deleteCaracter(eliminarCaracteres, "xyz");
