//!XMLHttpRequest:
(() => {
  const d = document,
    xhr = new XMLHttpRequest(),
    $xhr = d.getElementById("xhr"),
    $fragment = d.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    // console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      // console.log("Exito");
      // console.log(xhr.responseText);
      let json = JSON.parse(xhr.responseText);
      // console.log(json);
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      // console.log("Error");
      let message = xhr.statusText || "Ocurrio un Error";

      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();
})();

//!API Fetch:
(() => {
  const d = document,
    $fetch = d.getElementById("fetch"),
    $fragment = d.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      // console.log(res);
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      // console.log(json);
      // $fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      // console.log("Estamos en el Catch", err);
      let message = err.statusText || "Ocurrio un Error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    });
  // .finally(
  //   console.log(
  //     "Esto se ejecutara independientemente del resultado de la Promesa Fetch"
  //   )
  // );
})();

//!API Fetch + Async-Await:
(() => {
  const d = document,
    $fetchAsync = d.getElementById("fetch-async"),
    $fragment = d.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      // console.log(res, json);

      if (!res.ok)
        throw {
          status: res.status,
          statusText: res.statusText,
        };

      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch (err) {
      // console.log(err);
      let message = err.statusText || "Ocurrio un Error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      // console.log(
      //   "Esto se ejecutara independientemente del resultado del try...catch "
      // );
    }
  }

  getData();
})();

//!Librería Axios:
(() => {
  const d = document,
    $axios = d.getElementById("axios"),
    $fragment = d.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      // console.log(res);
      let json = res.data;

      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    })
    .catch((err) => {
      // console.log(err.response);
      let message = err.response.statusText || "Ocurrio un Error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      // console.log("Esto se ejecutara independientemente del resultado Axios ");
    });
})();

//!Librería Axios + Async-Await:
(() => {
  const d = document,
    $axiosAsync = d.getElementById("axios-async"),
    $fragment = d.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;
      // console.log(json);

      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (err) {
      // console.log(err.response);
      let message = err.response.statusText || "Ocurrio un Error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      // console.log(
      //   "Esto se ejecutara independientemente del resultado del try...catch "
      // );
    }
  }

  getData();
})();
