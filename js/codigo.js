//función para que se genere automaticamente un número entre 1 y 3
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*función que indica que elemento del juego corresponde
al número seleccionado o generado.*/
function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Elegiste 🪨";
  } else if (jugada == 2) {
    resultado = "Elegiste 📄";
  } else if (jugada == 3) {
    resultado = "Elegiste ✂️";
  } else {
    resultado = "MAL ELEGIDO";
  }
  return resultado;
}

/*funcion que retorna el resultado del enfrentamiento entre la 
la computadora y la persona*/
function combate(maquina, persona) {
  if (maquina == persona) {
    result = "Empate...🤼";
  } else if (persona == 1 && maquina == 3) {
    result = "Ganaste...😁";
  } else if (persona == 2 && maquina == 1) {
    result = "Ganaste...😁";
  } else if (persona == 3 && maquina == 2) {
    result = "Ganaste...😁";
  } else {
    result = "Perdiste...😭";
  }
  return result;
}

// 1 es piedra, 2 es papel y 3 es tijera
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;
let resultCombate = "";

//Ciclo que controla cuántas veces se va a jugar.
while (triunfos < 3 && perdidas < 3) {
  jugador = prompt("Elige: 1.Piedra, 2.Papel, 3.Tijera: ");
  pc = aleatorio(1, 3);
  //alert("Elegiste " + jugador);

  alert("Tu eliges: " + eleccion(jugador));
  alert("PC elige: " + eleccion(pc));

  //Combate
  resultCombate = combate(pc, jugador);
  alert(resultCombate);
  if (resultCombate == "Ganaste...😁") {
    triunfos = triunfos + 1;
  } else if (resultCombate == "Perdiste...😭") {
    perdidas = perdidas + 1;
  }
}

alert("Ganaste: " + triunfos + " veces.  Perdiste: " + perdidas + " veces.");
