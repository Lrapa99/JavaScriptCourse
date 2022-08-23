//No es mas que una nueva forma de escribir y asignar atributos



//ejemplo sin las nuevas caracteristicas de los objetos literales

let name = "luis",
    age = 23;


const dog = {
    name: name,
    age: age,
    ladrar: function(){
        console.log("guau guau");
    }
}

console.log(dog);

dog.ladrar()


//ejemplo con las nuevas caracteristicas de los objetos literales

const perro ={ //podremos asignar los valores que contienen las variables simplemente nombrando las propiedades del objeto con el mismo nombre
name,
age,
new: "Nueva propiedad", // tambien podremos seguir agregando nuevas propiedades, de la forma tradicional, llave valor
ladrar(){
    console.log("ladridos"); //podremos asignar un metodo dentro del objeto, simplemente asignando la funcion.
}
}

console.log(perro);
perro.ladrar()
