/**
 * Obtener el valor de la carta
 * @param {String} carta 
 * @returns {Number} valor de la carta
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0,carta.length - 1);//extrae desde la posicion 0 la cantitad de lenght-1
    return (isNaN(valor))?((valor === 'A') ? 11 : 10):(valor*1);
    //let puntos = 0;
    // if(isNaN(valor)){ //funcion isNaN es No un Numero? true si no es un numero
    //     puntos = (valor === 'A') ? 11 : 10;
    // }else{
    //     puntos = valor*1; //para convertir un string a numero se multiplica por 1
    // }
}

//export default valorCarta;