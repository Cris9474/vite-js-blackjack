export const determinarGanador = (puntosJugadores) => {
    const [ puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        if(puntosComputadora===puntosMinimos){
            alert('Empate');
        }else if(puntosMinimos>21){
            alert('La computadora gano');
        }else if(puntosComputadora>21){
            alert('Jugador gana');
        }else{
            alert('Computadora gana');
        }
    }, 100);
  }