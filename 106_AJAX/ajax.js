(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", e => {
    if (xhr.readyState !== 4) { //solo cuando es 4 ya esta en el estado completado
      return (xhr)
    }
    if (xhr.status >= 200 && xhr.status < 300) {
      //console.log(xhr)
      //console.log("exito")
      let json = JSON.parse(xhr.responseText)
      //console.log(json);

      json.forEach(el => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment)
    } else {
      //console.log("error")
      let message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error....${xhr.status}: ${message}`
    }
    //console.log(xhr)
    //console.log("Este mensaje cargara de todas formas...........")
  });
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();

})();

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();
  fetch("https://jsonplaceholder.typicode.com/users")
    /* .then((res) => {
      console.log(res);
      return res.ok ? res.json() : Promise.reject(res)
    }) */
    .then((res) => res.ok ? res.json() : Promise.reject(res))
    .then((json) => {
      //console.log(json);
      //$fetch.innerHTML = json;
      json.forEach(el => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment)

    })
    .catch((err) => {
      //console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error....${err.status}: ${message}`;
    }).finally(() => {
      //console.log("esto se ejecutara simepre por la promesa de fetch")
    });



})();
(() => {
  const $fetchasync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();
      if (!res.ok) throw {
        status: res.status,
        statusText: res.statusText
      }

      json.forEach(el => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchasync.appendChild($fragment);
    } catch (err) {
      let message = err.statusText || "Ocurrio un error";
      $fetchasync.innerHTML = `Error....${err.status}: ${message}`;
    } finally {
      //console.log("este es el finally")
    }



  }
  getData();

})();

(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();
  //console.log($axios)
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      //console.log(res);
      let json = res.data;

      json.forEach(el => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    }).catch(err => {
      //console.log(err.respose)
      let message = err.response.statusText || "Ocurrio un error";
      $axios.innerHTML = `Error....${err.response.status}: ${message}`;
    }).finally(() => {
      //console.log("Esto se ejecutara independientemete")
    });

})();
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  //console.log($axiosAsync)

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      json = await res.data;
      //console.log(res, json)

      json.forEach(el => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);

      });
      $axiosAsync.appendChild($fragment);
    } catch (err) {
      //console.log(err.response)
      let message = err.response.statusText || "Ocurrio un error";
      $axiosAsync.innerHTML = `Error....${err.response.status}: ${message}`;
    } finally {
      console.log("jajajaj finally")
    }
  }
  getData();
})();