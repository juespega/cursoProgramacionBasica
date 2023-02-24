//Crear una varible global para que pueda ser utilizada en todas las funciones
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");
const botonReiniciar = document.getElementById("boton-reiniciar");

const sectionSeleccionarMascota = document.getElementById(
  "seleccionar-mascota"
);
// let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const inputHipodoge = document.getElementById("hipodoge");
const inputCapipepo = document.getElementById("capipepo");
const inputRatigueya = document.getElementById("ratigueya");
const spanMascotaJugador = document.getElementById("mascota-jugador");

const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

const sectionMensajes = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataque-del-jugador");
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo");

// let sectionMensajes = document.getElementById("resultado");
// let botonFuego = document.getElementById("boton-fuego");
// let botonAgua = document.getElementById("boton-agua");
// let botonTierra = document.getElementById("boton-tierra");
// let sectionReiniciar = document.getElementById("reiniciar");

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

//función que carga la página y llama los botones.
function iniciarJuego() {
  //Ocultar la sección de seleccionar ataque de entrada.
  sectionSeleccionarAtaque.style.display = "none";
  //Ocultar la sección del boton reiniciar.
  sectionReiniciar.style.display = "none";
  //Escuchar el evento click del boton de mascota
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  botonFuego.addEventListener("click", ataqueFuego);
  botonAgua.addEventListener("click", ataqueAgua);
  botonTierra.addEventListener("click", ataqueTierra);
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

//el get.ElementById -> selecciona un objeto del DOM por su id.
function seleccionarMascotaJugador() {
  //Ocultar la sección de seleccionar mascota, luego de haberla seleccionado.
  sectionSeleccionarMascota.style.display = "none";
  //Habilitar nuevamente la sección de seleccionar ataque de entrada.
  sectionSeleccionarAtaque.style.display = "flex";
  //La propiedad innerHTML permite cambiar el contenido de un elemento.
  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("Selecciona una mascota");
  }
  seleccionarMascotaJugadorEnemigo();
}

function seleccionarMascotaJugadorEnemigo() {
  let mascotaAleatoria = aleatorio(1, 3);

  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }

  combate();
}

function combate() {
  //seleccionamos los span que tienen las vidas

  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensaje("GANASTE");
    //Actualizamos las vidas del enemigo
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE");
    //Actualizamos las vidas del jugador
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }

  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("FELICITACIONES! Ganaste el juego 😁");
  } else if (vidasJugador == 0) {
    crearMensajeFinal("Lo siento! Perdiste el juego 😭");
  }
}

function crearMensaje(resultado) {
  let notificacion = document.createElement("p");
  let nuevoAtaquedelJugador = document.createElement("p");
  let nuevoAtaquedelenemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaquedelJugador.innerHTML = ataqueJugador;
  nuevoAtaquedelenemigo.innerHTML = ataqueEnemigo;

  //Crea un elemento <p> con el texto resultado
  // let parrafo = document.createElement("p");
  // parrafo.innerHTML =
  //   "Tu mascota atacó con " +
  //   ataqueJugador +
  //   ", La mascota del enemigo atacó con " +
  //   ataqueEnemigo +
  //   " - " +
  //   resultado;
  //La propriedad appendChild permite agregar un elemento al final de un elemento.

  /* sectionMensajes.appendChild(notificacion); */
  ataqueDelJugador.appendChild(nuevoAtaquedelJugador);
  ataqueDelEnemigo.appendChild(nuevoAtaquedelenemigo);
}

function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;
  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;
  //Habilitar nuevamente la sección de reiniciar.
  sectionReiniciar.style.display = "block";
}

//Función para reiniciar el juego
function reiniciarJuego() {
  //objeto al cual se le aplica la funcion reload y reinicia la pagina
  location.reload();
}

//Función para generar un número aleatorio entre 1 y 3
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Evento que nos avisa cuando el navegador cargue la página
window.addEventListener("load", iniciarJuego);
