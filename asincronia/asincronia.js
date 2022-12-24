// console.log("inico");

// setTimeout(() => {
//   console.log(`Ejecutando un setTimeOut, esto se ejecuta una sola vez`);
// }, 3000);

// setInterval(() => {
//   console.log(
//     `Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo`
//   );
// }, 1000);

// let tempo = setTimeout(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// clearTimeout(tempo);
// console.log("despues del clearTimeOut");

// let tempo = setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// clearInterval(tempo);
// console.log("despues del clearInterval");

// Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:

// Procesamientos Single thread y Multi thread.
// Operaciones de CPU y Operaciones de I / O.
// Operaciones Concurrentes y Paralelas.
// Operaciones Bloqueantes y No Bloqueantes.
// Operaciones Sincronas y Asincronas.

// JavaScript usa un modelo asincrono y no bloqueante,con un loop de eventos implementado en un solo hilo, (single thread) para operaciones de entrada y salida(input / output)

//? Codigo Sincrono Bloqueante

// (() => {
//   console.log(`Codigo Sincrono:`);
//   console.log(`Inicio`);

//   function dos() {
//     console.log("Dos");
//   }
//   function uno() {
//     console.log("Uno");
//     dos();
//     console.log("Tres");
//   }

//   uno();
//   console.log(`Fin`);
// })();

//? Codigo Asincrono No Bloqueante

// (() => {
//   console.log(`Codigo Asincrono:`);
//   console.log(`Inicio`);

//   function dos() {
//     setTimeout(() => {
//       console.log("Dos");
//     }, 1000);
//   }
//   function uno() {
//     setTimeout(() => {
//       console.log("Uno");
//     }, 0);
//     dos();
//     console.log("Tres");
//   }

//   uno();
//   console.log(`Fin`);
// })();

function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

// cuadradoCallback(0, (value, result) => {
//   console.log("inicia callback");
//   console.log(`Calllback: ${value}, ${result}`);
//   cuadradoCallback(1, (value, result) => {
//     console.log(`Calllback: ${value}, ${result}`);
//     cuadradoCallback(2, (value, result) => {
//       console.log(`Calllback: ${value}, ${result}`);
//       cuadradoCallback(3, (value, result) => {
//         console.log(`Calllback: ${value}, ${result}`);
//         cuadradoCallback(4, (value, result) => {
//           console.log(`Calllback: ${value}, ${result}`);
//           cuadradoCallback(5, (value, result) => {
//             console.log(`Calllback: ${value}, ${result}`);
//             console.log("Fin Callback");
//             console.log("Callback Hell !!! 👺🤘");
//             console.log("http://callbackhell.com/");
//           });
//         });
//       });
//     });
//   });
// });

// function cuadradoPromise(value) {
//   if (typeof value !== "number")
//     return Promise.reject({
//       type: `Error de Parametro`,
//       info: `El valor "${value}" ingresado no es un numero`,
//     });
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         value,
//         result: value * value,
//       });
//     }, 0 | (Math.random() * 1000));
//   });
// }

// cuadradoPromise(0)
//   .then((obj) => {
//     // console.log(obj);
//     let { value, result } = obj;
//     console.log("Inicia Promise");
//     console.log(`Promise: ${value}, ${result}`);
//     return cuadradoPromise(1);
//   })
//   .then((obj) => {
//     let { value, result } = obj;
//     console.log(`Promise: ${value}, ${result}`);
//     return cuadradoPromise(2);
//   })
//   .then((obj) => {
//     let { value, result } = obj;
//     console.log(`Promise: ${value}, ${result}`);
//     return cuadradoPromise(3);
//   })
//   .then((obj) => {
//     let { value, result } = obj;
//     console.log(`Promise: ${value}, ${result}`);
//     return cuadradoPromise(4);
//   })
//   .then((obj) => {
//     let { value, result } = obj;
//     console.log(`Promise: ${value}, ${result}`);
//     return cuadradoPromise(5);
//   })
//   .then((obj) => {
//     let { value, result } = obj;
//     console.log(`Promise: ${value}, ${result}`);
//   })
//   .catch((err) => console.error(err));

function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject({
      type: `Error de Parametro`,
      info: `El valor "${value}" ingresado no es un numero`,
    });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

async function funcionAsincronaDeclarada(repet = 1) {
  for (let i = 0; i < repet; i++) {
    try {
      console.log("Inicio de Async Function");
      let obj = await cuadradoPromise(i);

      let { value, result } = obj;

      console.log(`Promise: ${value}, ${result}`);
    } catch (err) {
      console.error(err);
    }
  }
  console.log("Fin de Async Function");
}

// funcionAsincronaDeclarada(6);

const funcionAsincronaExpresada = async (repet = 1) => {
  for (let i = 0; i < repet; i++) {
    try {
      console.log("Inicio de Async Function");
      let obj = await cuadradoPromise(i);

      let { value, result } = obj;

      console.log(`Promise: ${value}, ${result}`);
    } catch (err) {
      console.error(err);
    }
  }
  console.log("Fin de Async Function");
};

// funcionAsincronaExpresada(6);
