import { barcelona, roma, paris, londres } from "./ciudades.js";

//Obtener los elementos del DOM
let enlaces = document.querySelectorAll("a");

let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");

//agregar un evento click a cada enlace
enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    //Remover el activo
    enlaces.forEach((enlace) => {
      enlace.classList.remove("active");
    });
    //Agregar active al que corresponda
    enlace.classList.add("active");

    //Traer la información del objeto correspondiente a la elección
    let contenido = obtenerContenido(enlace.textContent);

    //Mostrar el contenido en el DOM
    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
});
});

//Función para traer la información correcta desde ciudades.js
function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
