//las clases no reciben parametros directamente,solo por medio del constructor

class Animal {
  constructor(name, sexo) {
    //el constructor de una clase es un metodo especial que se ejecuta en el momento de instanciar la clase

    //atributos
    this.name = name;
    this.sexo = sexo;
  }

  //metodos

  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  }

  saludar() {
    console.log(`Hola me llamo ${this.name} y soy ${this.sexo}`);
  }
}


const cat = new Animal("Pacho","Macho")

console.log(cat);
cat.sonar()
cat.saludar()


const dog = new Animal("Luna","Hembra")


console.log(dog);
dog.sonar()
dog.saludar()


class gato extends Animal{
  //con el metodo super() se manda a llamar el constructor de la calse padre
  constructor(name, sexo, size){
    super(name, sexo)
    this.size = size  
  }

  sonar(){
    console.log("Soy una gato");
  }

}


const myCat = new gato("Pacho","Macho","Mediano")


console.log(myCat);

myCat.sonar()
