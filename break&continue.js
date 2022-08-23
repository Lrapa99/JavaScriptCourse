//controlar estructuras de control o bucles


const numeros = [1,2,3,4,5,6,7,8,9,0]

for (let i = 0; i < numeros.length; i++) {  

    if (i === 5) {
        break; //se detiene por completo el recorrido
    }
    console.log("Caso break: " + numeros[i]);
}


for (let i = 0; i < numeros.length; i++) {  

    if (i === 5) {
        continue; //continua con el recorrido a pesar de la condicion, saltando la misma
    }
    console.log("Caso continue: " + numeros[i]);
}
