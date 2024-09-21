import { valorCarta } from "./valor-carta";
/**
 * 
 * @param {HTMLElement} puntosHTML 
 * @param {*} carta 
 * @param {*} turno 
 * @returns 
 */
//Turno: 0 = primer jugador y el ultimo sera la computadora
export const acumularPuntos = (puntosJugadores,puntosHTML,carta,turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}