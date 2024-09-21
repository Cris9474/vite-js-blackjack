import _ from 'underscore';
import {crearDeck,pedirCarta,acumularPuntos,turnoComputadora,crearCarta }from './usecases';

//import { crearDeck as crrearNuevoDeck} from './usecases/crear-deck';

//sintaxion del patron modulo

// (()=>{
// })(); //Funciones anonimas autoinvocdas  
const miModulo = (()=>{
  'use strict' //modo estricto
  let deck = [];
  let tipos = ['C','D','H','S'], 
      especiales = ['A','J','Q','K'];
  let puntosJugadores = [];

  ///Referencias del HTML
  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

  const divCartasJugadores = document.querySelectorAll('.divCartas'),   
        puntosHTML = document.querySelectorAll('small'); 
  
  //Esta funcion inicializa el juego
  const inicializarJuego = (numJugadores=2) => {
      deck = crearDeck(tipos,especiales);
      puntosJugadores = [];
      console.log({numJugadores});
      for(let i=0; i<numJugadores; i++){
          puntosJugadores.push(0);//PONEMOS 0 EN LOS CONTADORES DE LOS JUGADORES
      }
      puntosHTML.forEach(elem =>elem.innerText=0);
      divCartasJugadores.forEach(elem =>elem.innerHTML='');
      btnDetener.disabled = false;
      btnPedir.disabled = false;
    }    
  
  ///EVENTOS
  btnDetener.addEventListener('click',() =>{
      btnDetener.disabled = true;
      btnPedir.disabled = true;
      turnoComputadora(puntosJugadores,puntosJugadores[0],deck,puntosHTML,divCartasJugadores);
  });

  btnNuevo.addEventListener('click',() =>{
      inicializarJuego();
  });

  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(puntosJugadores,puntosHTML,carta,0);
      crearCarta(carta,0,divCartasJugadores);
      // imgCarta.src = `assets/cartas/${carta}.png`;
      // imgCarta.classList.add('carta');
      // divCartasJugador.append(imgCarta);
      if (puntosJugador>21){
          console.warn('Perdiste :(');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugadores,puntosJugador,deck,puntosHTML,divCartasJugadores); //cambie carta por deck
      }else if(puntosJugador===21 ){
          console.warn('21, Ganaste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugadores,puntosJugador,deck,puntosHTML,divCartasJugadores);
      }
  });

  return {
      nuevoJuego:inicializarJuego
  };
})();

//TODO: Borrar
//turnoComputadora(12);