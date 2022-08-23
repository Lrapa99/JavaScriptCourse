//POO (Programacion orientada a objetos)
/*
Clases- Modelo a seguir

Objetos- Es una instancia de una clase
    - Atributos: es una caracteristica o propiedad del objeto (son variables dentro de un objeto)
    - Metodos: son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
*/

const animal = {
  name: "Snoopy",
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  },
};

console.log(animal);

animal.sonar();

//funcion constructora, se usa UpperCamelCase, al nombrar las clases

function Animal(name, sexo) {
  //atributos
  this.name = name;
  this.sexo = sexo;

  //metodos
  this.sonar = function () {
    console.log("Hago sonidos porque estoy vivo");
  };
}

const coneja = new Animal("Sol", "Hembra"),
  cat = new Animal("Pacho", "Macho");

console.log(coneja);
console.log(cat);

//funcion constructora, donde asignamos los metodos al prototipo, no a la funcion como tal

function Animal(name, sexo) {
  //atributos
  this.name = name;
  this.sexo = sexo;
}

//metodos agregados al prototipo de la funcion constructora

Animal.prototype.sonar = function () {
  console.log("Hago sonidos porque estoy vivo");
};

