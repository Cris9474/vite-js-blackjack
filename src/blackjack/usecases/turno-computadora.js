import { pedirCarta } from "./pedir-carta";
import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./determinar-ganador";
/**
 * 
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar 
 * @param {Array<String>} deck 
 */
//Turno computadora
export const turnoComputadora = (puntosJugadores,puntosMinimos,deck,puntosHTML,divCartasJugadores) => {
    if(!puntosMinimos)throw new Error('Puntos minimos son necesarios');
    if(!deck)throw new Error('Deck es necesario');
    let puntosComputadora = 0;
    do{
        const carta = pedirCarta(deck);
        puntosComputadora   = acumularPuntos(puntosJugadores,puntosHTML,carta,puntosJugadores.length-1);
        crearCarta(carta,puntosJugadores.length-1,divCartasJugadores);
    }while((puntosComputadora< puntosMinimos) && (puntosMinimos<=21));
    determinarGanador(puntosJugadores);
}