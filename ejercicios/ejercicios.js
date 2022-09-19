import { cadena } from "./1parte.js"; // importamos la constante cadena del modulo 1parte
import { misConst } from "./2parte.js";
import { misNumeros } from "./3parte.js";
import { parte4 } from "./4parte.js";

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

  const reg = new RegExp(escapeRegExp(palabraBusquedad), "ig");

  //console.log(reg);

  const nuevaStr = str.replace(reg, "");

  console.log(`Cadena inicial: ${eliminarCaracteres}`);
  console.log(`Valor eliminado: "${palabraBusquedad}"`);
  console.log(`Cadena final: ${nuevaStr}`);
};

//deleteCaracter(eliminarCaracteres, "xyz");

//*ejercicio 9:

const valorInicial = misNumeros.numerosAleatorios[0];
const valorFinal = misNumeros.numerosAleatorios[1];

const numerosAleatorios = (min = "", max = "") => {
  if (!min || !max)
    return console.error("Debe ingresar el valor inicial y el valor final");

  min = Math.ceil(min);
  max = Math.floor(max);

  const aleatorio = Math.floor(Math.random() * (max - min + 1) + min);

  console.log(`Un numero aleatorio entre: ${valorInicial} y ${valorFinal}`);

  return console.log(`Valor Aleatorio: ${aleatorio}`);
};

// numerosAleatorios(valorInicial, valorFinal);

//*ejercicio 10:

const capicua = misNumeros.numeroCapicua;

//console.log(capicua);

const getCapicua = (numero = "") => {
  if (!numero) return console.warn("Por favor ingresa un valor");

  let reverseNum = numero.toString().split("").reverse().join("");

  console.log(`Inicial: ${numero}`);
  console.log(`Final: ${reverseNum}`);

  return console.log(`Valor de Palindromo:`, numero.toString() === reverseNum);
};

// getCapicua(capicua);

//*ejercicio 11:

const factorial = misNumeros.numeroFactorial;

// console.log(factorial);

const getFactorial = (num = undefined) => {
  if (num === undefined) return console.warn("NO ingresaste un numero");

  if (typeof num !== "number")
    return console.error(`El valor "${num}" ingresado NO es un numero`);

  if (num === 0) return console.error("El numero no puede ser 0");

  if (Math.sign(num) === -1)
    return console.error("El numero NO puede ser negativo");
  console.log(`Valor ingresado: ${num}`);

  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }

  return console.log("Factorizado: ", num);
};

// getFactorial(5);

//*ejercicio 12:

const primo = parte4.numeroPrimo;
const noPrimo = parte4.numeroNoPrimo;

//console.log(primo, noPrimo);

const getPrimoNoPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero");

  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado NO es un numero`);

  if (Math.sign(numero) === -1)
    return console.error("El numero NO puede ser negativo");

  console.log(`Valor ingresado: ${numero}`);

  if (numero === 0 || numero === 1 || numero === 4)
    return console.log("No es primo");

  for (let x = 2; x < numero / 2; x++) {
    if (numero % x === 0) return console.log("No es primo");
  }

  return console.log("Si es primo");
};

// getPrimoNoPrimo(primo);
// getPrimoNoPrimo(noPrimo);

//*ejercicio 13:

const par = parte4.par;
const impar = parte4.impar;

//console.log(par, impar);

const getParImpar = (num = undefined) => {
  if (num === 0) return console.error("El numero debe ser mayor a 0");

  if (!num) return console.warn("Por favor ingrese un numero");

  if (typeof num !== "number")
    return console.error("El valor ingresado no es un numero");

  if (num % 2 !== 0) return console.log(`El numero ${num}, es IMPAR`);

  return console.log(`El numero ${num}, es PAR`);
};

// getParImpar(par); //8 par
//  getParImpar(impar); //7 impar

//*ejercicio 14:

const gradosCelsius = parte4.gradosCelsius;

const gradosFahrenheit = parte4.gradosFahrenheit;

console.log(gradosCelsius, gradosFahrenheit);

const getGrados = (grados = '', tipo = "") => {

  if (grados === '') return console.warn("Por favor ingrese un numero");

  if (!tipo) return console.error("No ingresaste el tipo a convertir");

  if (typeof grados !== "number")
    return console.error("El valor ingresado no es un numero");

  if (typeof tipo !== "string")
    return console.error("El valor del tipo a convertir debe ser un string");

  /*
    Para convertir de ºC a ºF use la fórmula:   ºF = ºC x 1.8 + 32.
    Para convertir de ºF a ºC use la fórmula:   ºC = (ºF-32) ÷ 1.8.
 */

  const minusTipo = tipo.toLowerCase();

  if (minusTipo !== "c" && minusTipo !== "f")
    return console.error("Tipo de conversion NO valido");

    const Fahrenheit = (grados * 1.8) + 32;

    const celsius = (grados - 32) / 1.8;


    const resultado = minusTipo === 'c' ? `${Fahrenheit} ºF` : `${celsius} ºC`

      console.log(resultado);

};

getGrados(gradosCelsius,'c');
getGrados(gradosFahrenheit,'f');

