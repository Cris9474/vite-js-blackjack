export const crearCarta = (carta, turno,divCartasJugadores) =>{
    const imgCarta = document.createElement('img');//Se crea la tarjeta pero solo en memoria
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
    // divCartasComputadora.append(imgCarta);    
}