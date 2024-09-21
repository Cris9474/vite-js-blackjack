import _ from 'underscore';

export const miNombre = 'Fernando';
//This function CREA a new deck
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta,tiposEspeciales) =>{
    if(!tiposDeCarta || tiposDeCarta==0) throw new Error('tiposDeCarta es obligatorio como un arreglo de String');
    if(!tiposEspeciales || tiposEspeciales==0) throw new Error('tiposEspeciales es obligatorio como un arreglo de String');

    let deck = [];
    for(let i = 2; i <= 10; i++){
        for(let tipo of tiposDeCarta){ //'C','D','H','S'
            deck.push(i+tipo);
        }
    }

    for(let tipo of tiposDeCarta){
        for(let esp of tiposEspeciales){ //'A','J','Q','K'
            deck.push(esp+tipo)
        }
    }
    return _.shuffle(deck); //distribuir aleatoriamente los elementos
}
//export default crearDeck;