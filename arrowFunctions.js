//nueva forma de definir funciones anonimas de manera expresada, mas faciles de leer, y con menos codigo

//manera tradicional:

const saludar = function (name) {
  console.log(`Hola ${name} que tal?`);
};

saludar("luis"); //invocamos la funcion

//manera expresada con arrow function, cuando la funcion solo tiene solo una linea de instruccion, puedo omitir las llaves, tambien se pueden omitir los parentesis si recibe un parametro

const saludo = name => console.log(`Hola ${name}, Este es un saludo expresado en una arrow function`);

saludo("luis"); //invocamos la arrow function


//omitiendo return en arrow function


const sumar = (a, b) => /*return*/ a +b;

console.log(sumar(9 , 9));


//recorrer arreglos con arrow function

const numeros = [1,2,3,4,5];

numeros.forEach((element, index) => console.log(`El elemento ${element} esta en la posicion ${index}`));



//utilizando el this en las arrow function

const dog = {
    name: "luna",
    ladrido: "guau",
    ladrar(){
        console.log(this.ladrido); 
}
}


dog.ladrar()

