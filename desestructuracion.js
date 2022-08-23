//La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

//ejemplo sin desestructuracion

const numeros = [1, 2, 3, 4, 5, 6];

let uno = numeros[0], //asignamos valores del arreglo en variables independientes
  dos = numeros[1],
  tres = numeros[2];

console.log(uno, dos, tres);

//ejemplo con desestructuracion

const [one, two, three , ...rest] = numeros; //asignamos a cada variable los valores del arreglo empleando la desestructuracion

console.log(one, two, three, rest); //obtenemos el mismo resultado, empleando una sintaxis mas sencilla y facil de entender

//un ejemplo con un objeto, aplicando la desestructuracion

const person = {
  name: "luis",
  lastname: "rapalino",
  age: 23,
};

//Nota Importante: Para que funcione correctamente la desestructuracion con los objetos, debemos asignar las variables con el mismo nombre de las propiedades del objeto, de lo contrario nos dara un valor undefined

let { name, lastname, age } = person; //asignamos nuevamente a cada variable los valores que contienen las propiedades del objeto  , para finalmente mostrarlos por consola

console.log(name, lastname, age);
