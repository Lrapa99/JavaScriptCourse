//herencia prototipica


function Animal(name, sexo) {
    //atributos
    this.name = name;
    this.sexo = sexo;
  }


  
Animal.prototype.sonar = function () {
    console.log("Hago sonidos porque estoy vivo");
  };
  

function dog(name, sexo, size){
this.super = Animal; //asociacion de la herencia prototipica
this.super(name, sexo)
this.size = size
}

//dog esta heredando de Animal
dog.prototype = new Animal()

dog.prototype.constructor = dog

//sobreescritura del metodod del prototipo padre en el hijo

dog.prototype.sonar = function (){
    console.log("Soy un perro");
} 



