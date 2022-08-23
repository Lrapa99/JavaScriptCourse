//Recorrer propiedades de objetos, y datos de arreglos por medio de ciclo for:


let numeros = [1,2,3,4,5]

console.log("Iterando array de numeros:");

for (const elemento of numeros) {
    
    console.log(`Numero: ${elemento}`);
}

const users = {
    name: "luis",
    lastname: "rapalino",
    age: 23
}

console.log("Iterando props de un objeto:");

for (const props in users) {
    console.log(`Key: ${props}, Value: ${users[props]}`);
}

console.log("Iterando caracteres de una cadena de texto:");

let cadena = "Luis Rapalino"

for (const caracter of cadena) {
    console.log(caracter);
}