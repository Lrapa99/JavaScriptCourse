//las clases no reciben parametros directamente,solo por medio del constructor

class Animal {
  constructor(name, sexo) {
    //el constructor de una clase es un metodo especial que se ejecuta en el momento de instanciar la clase

    //atributos
    this.name = name;
    this.sexo = sexo;
    this.raza = null;
  }

  //metodos

  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  }

  saludar() {
    console.log(`Hola me llamo ${this.name} y soy ${this.sexo}`);
  }

  //un metodo estatico se pueden ejecutar sin necesidad de instanciar la clase

  static queEres() {
    console.log(
      "los perros somos animales mamiferos que pertenecemos a la familia de los caninos, somos considerados los mejores amigos del hombre"
    );
  }

  //los setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
  get getRaza() {
    return this.raza;
  }

  set setRaza(raza) {
    this.raza = raza;
  }
}

const cat = new Animal("Pacho", "Macho");

console.log(cat);
cat.sonar();
cat.saludar();

const dog = new Animal("Luna", "Hembra");

console.log(dog);
dog.sonar();
dog.saludar();

class gato extends Animal {
  //con el metodo super() se manda a llamar el constructor de la calse padre
  constructor(name, sexo, size) {
    super(name, sexo);
    this.size = size;
  }

  sonar() {
    console.log("Soy una gato");
  }

  //un metodo estatico se pueden ejecutar sin necesidad de instanciar la clase
  static queEres() {
    console.log("Soy una gato muy agradable y jugueton");
  }
}

const myCat = new gato("Pacho", "Macho", "Mediano");

console.log(myCat);

myCat.sonar();

Animal.queEres(); //llamamos el metodo estatico, pertenecientes al padre

gato.queEres(); //llamamos el metodo estatico, pertenecientes al padre

dog.setRaza = "Chiguagua" //asignamos valor para setRaza

console.log(dog.getRaza); //mostramos por consola el resultado


