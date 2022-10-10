import { cadena } from "./1parte.js"; // importamos la constante cadena del modulo 1parte
import { misConst } from "./2parte.js";
import { misNumeros } from "./3parte.js";
import { parte4 } from "./4parte.js";
import { parte5 } from "./parte5.js";
import { parte6 } from "./6parte.js";

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

const { cadenaTexto: miValor } = misConst;

//console.log(miValor);

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

const { cadenaRepetida } = misConst;

//console.log(cadenaRepetida);

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

const { palindromo } = misConst;

//console.log(palindromo);

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

const { eliminarCaracteres } = misConst;

//console.log(eliminarCaracteres);

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

//console.log(valorInicial, valorFinal);

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

const { numeroCapicua: capicua } = misNumeros;

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

const { numeroFactorial: factorial } = misNumeros;

//console.log(factorial);

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

const { primo, noPrimo } = parte4;

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

const { par, impar } = parte4;

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

const { gradosCelsius, gradosFahrenheit } = parte4;

//console.log(gradosCelsius, gradosFahrenheit);

const getGrados = (grados = "", tipo = "") => {
  if (grados === "") return console.warn("Por favor ingrese un numero");

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

  const Fahrenheit = Math.round(grados * 1.8 + 32);

  const celsius = Math.round((grados - 32) / 1.8);

  const resultado = minusTipo === "c" ? `${Fahrenheit} ºF` : `${celsius} ºC`;

  console.log(resultado);
};

//  getGrados(gradosCelsius,'c');
//  getGrados(gradosFahrenheit,'f');

//*ejercicio 15:

const { binario, decimal, valor } = parte5;

//console.log(binario, decimal, valor);

const getBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined)
    return console.warn("No ingresaste un numero a convertir");
  if (typeof numero !== "number")
    return console.error("El valor ingresado NO es un numero");
  if (base === undefined)
    return console.warn("No ingresaste la base a convertir");
  if (typeof base !== "number")
    return console.error("El valor ingresado NO es un numero");
  if (base === 2) {
    return console.info(
      `${numero} Base: ${base} = ${parseInt(numero, base)} Base 10`
    );
  } else if (base === 10) {
    return console.info(
      `${numero} Base: ${base} = ${numero.toString(2)} Base 2`
    );
  } else {
    return console.error("El tipo de base a convertir NO es valido");
  }
};
// getBinarioDecimal(valor,binario)
// getBinarioDecimal(valor,decimal)

//*ejercicio 16:

const { monto, descuento } = parte5;

//console.log(monto, descuento);

const getMontoFinal = (valor = undefined, desc = undefined) => {
  if (valor === undefined || !valor)
    return console.warn("Por favor ingresa un valor");
  if (desc === undefined || !desc)
    return console.error("No ingresaste el porcentaje % de descuento");
  if (typeof valor !== "number" || typeof desc !== "number")
    return console.error("El valor ingresado no es un numero");
  if (valor === 0 || desc === 0)
    return console.error("El numero debe ser mayor a 0");
  if (Math.sign(valor) === -1 || Math.sign(desc) === -1)
    return console.error("El numero NO puede ser negativo");

  const valorDescuento = valor * (desc / 100);

  const montoTotal = valor - valorDescuento;

  console.log(
    `Valor ingresado: ${valor} , Descuento aplicado: ${desc}% , Monto Toltal: ${montoTotal}`
  );
};

// getMontoFinal(monto, descuento);

//*ejercicio 17:

const { year, mount, day } = parte5.newFecha; //destructuracion del objeto

//console.log(year, mount, day);

const getYearTrans = (y = undefined, m = undefined, d = undefined) => {
  if (y === undefined || m === undefined || d === undefined)
    return console.warn("Debes ingresar year , mount , day para calcular");

  if (typeof y !== "number" || typeof m !== "number" || typeof d !== "number")
    return console.error("El valor ingresado no es un numero");

  // let nac = new Date(y, m, d);
  // let tiempoTranscurrido = Date.now();
  // let hoy = new Date(tiempoTranscurrido);
  // let tiempoPasado = hoy - nac;
  // let segs = 1000;
  // let mins = segs * 60;
  // let hours = mins * 60;
  // let days = hours * 24;
  // let months = days * 30.416666666666668;
  // let years = months * 12;

  const calculos = {
    nac: new Date(y, m, d),
    tiempoTranscurrido: Date.now(),
    hoy: function () {
      return new Date(this.tiempoTranscurrido);
    },
    tiempoPasado: function () {
      return this.hoy() - this.nac;
    },
    segs: 1000,
    mins: function () {
      return this.segs * 60;
    },
    hours: function () {
      return this.mins() * 60;
    },
    days: function () {
      return this.hours() * 24;
    },
    months: function () {
      return this.days() * 30.416666666666668;
    },
    years: function () {
      return this.months() * 12;
    },
  };

  //calculo
  let totalYears = Math.floor(calculos.tiempoPasado() / calculos.years());

  //console.log(totalYears);

  console.log(
    `Desde la fecha: ${year}/${mount}/${day}, hasta hoy: ${calculos
      .hoy()
      .toDateString()}, han transcurrido: ${totalYears} años`
  );
};

//getYearTrans(year, mount, day);

//*ejercicio 18:

const { vocalesConsonantes, nameValidate, emailValidate } = parte6;

console.log(vocalesConsonantes, nameValidate, emailValidate);

const getVocalesAndConsonantes = (cadena = undefined) => {
  if (cadena === undefined || cadena === "") {
    return console.warn("Por favor ingrese una cadena de texto");
  }
  if (typeof cadena !== "string") {
    return console.error(`El valor ${cadena}, NO es una cadena de texto`);
  }
  if (cadena.match(/[0123456789]/g)) {
    return console.error(`El valor ${cadena}, NO es una cadena de texto`);
  }
  const numeroVocales = cadena.match(/[aeiou]/gi);
  const numeroConsonantes = cadena.match(/[bcdfghjklmnñpqrstvwxyz]/gi);

  console.log(`
  Cadena: ${cadena}
  Vocales: ${numeroVocales.length}: [${numeroVocales}] 
  Consonantes: ${numeroConsonantes.length}: [${numeroConsonantes}]
  `);
};

// getVocalesAndConsonantes();
// getVocalesAndConsonantes(878778);
// getVocalesAndConsonantes("7376336");
// getVocalesAndConsonantes("737633jhdjhdhioeoe6");
// getVocalesAndConsonantes(vocalesConsonantes);

//*ejercicio 19:

const getNameValidation = (name = undefined) => {
  if (name === undefined || name === "") {
    return console.warn("Por favor ingrese su nombre");
  }

  if (typeof name !== "string") {
    return console.error(`El valor ${name}, NO es un nombre valido`);
  }

  if (name.match(/[0123456789]/g)) {
    return console.error(`El valor ${name}, NO es un nombre valido`);
  }

  console.info(`El nombre: ${name}, es valido`);
};

// getNameValidation()
// getNameValidation(8776876)
// getNameValidation('364647637')
// getNameValidation(nameValidate)

//*ejercicio 20:

const getEmailValidation = (mail = undefined) => {
  if (mail === undefined || mail === "") {
    return console.warn("Por favor ingrese su correo");
  }

  function validar_email(email) {
    const regex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  }

  if (validar_email(mail)) {
    console.log(`El valor: ${mail}, SI es un correo valido`);
  } else {
    console.log(`El valor: ${mail}, NO es un correo`);
  }
};

getEmailValidation();
getEmailValidation(38483747);
getEmailValidation("868664545");
getEmailValidation("lrapa.com");
getEmailValidation(emailValidate);
