// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const devolverCuadrados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, NO es un numero`);
  }

  const newArr = arr.map((el) => el * el);

  return console.info(
    `Arreglo original ${arr}, nuevo arreglo elevado al cuadrado: ${newArr}`
  );
};

// devolverCuadrados();
// devolverCuadrados(true);
// devolverCuadrados({});
// devolverCuadrados([]);
// devolverCuadrados(["d", 1]);
// devolverCuadrados([5, 1, 10, 20]);

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].\

const arrMinMax = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, NO es un numero`);
  }

  return console.info(
    `Arreglo original: ${arr}\nValor mayor: ${Math.max(
      ...arr
    )}\nValor menor: ${Math.min(...arr)}`
  );
};

// arrMinMax();
// arrMinMax(false);
// arrMinMax([]);
// arrMinMax([2, 4, true]);
// arrMinMax([2, 4, 5]);

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const separarParesImpares = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, NO es un numero`);
  }

  return console.info({
    pares: arr.filter((num) => num % 2 === 0),
    impares: arr.filter((num) => num % 2 === 1),
  });
};

// separarParesImpares();
// separarParesImpares([]);
// separarParesImpares(["dhd", 3]);
// separarParesImpares([5, 2, 4, 8, 9, 7, 34, 56, 77]);

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarArreglo = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, NO es un numero`);
  }

  return console.info({
    arr,
    asc: arr.map((el) => el).sort(),
    desc: arr
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

// ordenarArreglo();
// ordenarArreglo("hdghdg");
// ordenarArreglo([]);
// ordenarArreglo(["tt"]);
// ordenarArreglo([6, 8, 2, 9, 1, 5]);

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacio");

  if (arr.length === 1)
    return console.warn("El arreglo debe tener al menos 2 elementos");

  // return console.log({
  //   arr,
  //   sinDuplicados: arr.filter(
  //     (value, index, self) => self.indexOf(value) === index
  //   ),
  // });

  return console.log({
    arr,
    sinDuplicados: [...new Set(arr)],
  });
};

// quitarDuplicados();
// quitarDuplicados("hduah");
// quitarDuplicados({});
// quitarDuplicados([]);
// quitarDuplicados(["dygydgy"]);
// quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const getPromedio = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, NO es un numero`);
  }

  return console.info(
    arr.reduce((total, num, index, arr) => {
      total += num;

      if (index === arr.length - 1) {
        return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
      } else {
        return total;
      }
    })
  );
};

// getPromedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3
//     instancias de la clase de forma automatizada e imprime la ficha técnica
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los generos aceptados son:\n ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es una cadena de texto`
      );

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud})`
      );
    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== "number")
      return console.error(
        `${propiedad} "${valor}" ingresado , NO es un numero`
      );

    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (!(valor instanceof Array))
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es un arreglo`
      );
    if (valor.length === 0)
      return console.error(`${propiedad} "${valor}" no tiene datos`);

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `El valor "${cadena}" ingresado, NO es una cadena de texto`
        );
    }

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!/^([a-z]{2}([0-9]{7}))$/.test(id))
        return console.error(
          `IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`
        );
    }
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo)) {
      this.validarLongitudCadena("Titulo", titulo, 100);
    }
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      this.validarLongitudCadena("Director", director, 50);
    }
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Año de Estreno", estreno)) {
      if (!/^([0-9]{4})$/.test(estreno))
        return console.error(
          `Año de Estreno "${estreno}" no es valido, debe ser un numero de 4 digitos`
        );
    }
  }

  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (const genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero(s) incorrectos "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion)) {
      return calificacion < 0 || calificacion > 10
        ? console.error(`La calificacion tiene que estar en un rango [0-10]`)
        : (this.calificacion = calificacion.toFixed(1));
    }
  }

  fichaTecnica() {
    console.info(
      `Ficha Tecnica:\nTitulo: "${this.titulo}"\nDirector: "${
        this.director
      }"\nAño: "${this.estreno}"\nPais: "${this.pais.join(
        "-"
      )}"\nGeneros: "${this.generos.join(", ")}"\nCalificacion: "${
        this.calificacion
      }"\nIMDB id: "${this.id}"`
    );
  }
}

// Pelicula.generosAceptados();

// const peli = new Pelicula({
//   id: "tt1234567",
//   titulo: "Titulo de la Peli",
//   director: "Director de la Peli",
//   estreno: 2020,
//   pais: ["Mexico"],
//   generos: ["Comedy"],
//   calificacion: 7.5,
// });

// peli.fichaTecnica();

const misPelis = [
  {
    id: "tt1234567",
    titulo: "Titulo de la Peli",
    director: "Director de la Peli",
    estreno: 1999,
    pais: ["Mexico"],
    generos: ["Sport"],
    calificacion: 8.5,
  },
  {
    id: "tt1234567",
    titulo: "Titulo de la Peli",
    director: "Director de la Peli",
    estreno: 2020,
    pais: ["Venezuela"],
    generos: ["Comedy"],
    calificacion: 9.5,
  },
  {
    id: "tt1234567",
    titulo: "Titulo de la Peli",
    director: "Director de la Peli",
    estreno: 2020,
    pais: ["Colombia"],
    generos: ["Action"],
    calificacion: 6.5,
  },
];

// misPelis.forEach((el) => new Pelicula(el).fichaTecnica());
