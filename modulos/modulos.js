//importacion de modulos
import Saludar, { PI, user } from "./constantes.js";
import { aritmetica  as calculos /*podremos asignar un alias al momento de importar */} from "./aritmetica.js";

//console.log('Archivo modulos.js');

//mostramos por consola los datos de las varables importadas
console.log(PI);
console.log(user);

//ejecutamos las funciones importadas
// console.log(aritmetica.sumar(2, 9));
// console.log(aritmetica.restar(5, 3));


console.log(calculos.sumar(2, 9)); //con el nuevo alias
console.log(calculos.restar(5, 3));

//saludar(); // se importa por defecto automaticamente, solo se puede una sola vez

//console.log(pass);//importacion por default de la variable pass

let saludo = new Saludar()//importacion de una clase, que es asignada a una variable
saludo;