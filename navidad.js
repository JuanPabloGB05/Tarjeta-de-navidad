//DESPLIEGUE EDICION
document.addEventListener("DOMContentLoaded", function() {
    const literalmente_solo_la_imagen = document.querySelector(".expansibleAbrir");
    const personajes = document.querySelector(".expansibleOpciones");

    let personajesVisibles = false;

    literalmente_solo_la_imagen.addEventListener("click", function() {
      personajesVisibles = !personajesVisibles;

      personajes.style.display = personajesVisibles ? "block" : "none";
    });

//DESPLIEGUE EDTITOR DE TEXTOS
    const literalment = document.querySelector(".Textosos");
    const personaje = document.querySelector(".textosAbiertos");

    literalment.addEventListener("click", function() {
      personajesVisibles = !personajesVisibles;

      personaje.style.display = personajesVisibles ? "block" : "none";
      
    });
//DESPLIEGUE EDTITOR DE FONDOS
    const FONDOS = document.querySelector(".fondosAbrir");
    const fondosos = document.querySelector(".fondosOpciones");

    FONDOS.addEventListener("click", function() {
      personajesVisibles = !personajesVisibles;

      fondosos.style.display = personajesVisibles ? "block" : "none";
    });
//DESPLIEGUE EDITOR DE STIKERS
    const stikers = document.querySelector(".stikersAbrir");
    const stikersos = document.querySelector(".stikerOpciones");

    stikers.addEventListener("click", function() {
      personajesVisibles = !personajesVisibles;

      stikersos.style.display = personajesVisibles ? "block" : "none";
    });
});