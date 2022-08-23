//parametro rest, almacena en una variable todos los valores, posteriores a las dos primeras variables
function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });

  return resultado;
}

console.log("Valores sumados de a y b: " + sumar(1, 2));

console.log("Valores sumados de a y b + c: " + sumar(1, 2, 15, 115));

//operator spread

const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2]; //almacenamos en una sola matriz, los valores de ambos arreglos

console.log(arr3);
