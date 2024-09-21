/**
 * Esta funcon me permite tomar una carta
 * @param {Array<String>} deck es un arreglo de Strings
 * @returns {String} retorna la carta del deck 
 */
export const pedirCarta = (deck) => {
    if(!deck || deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    return deck.shift();//elimina el elemento deck[0]
}
//.export default pedirCarta;