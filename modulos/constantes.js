//podemos exportar de este modulo solo lo que requiramos

export const PI = Math.PI;


export let user = 'lrapa99'

    let pass = 'elrapa00'

    //export default pass //exportar por defectos las constantes o variables, se debe hacer al final de la declaracion de la variable 



export function saludar(){ //esto es lo que se exportara por defecto
    console.log('Esto es un Export Default +ES6');
}

//export default con una clase
export default class Saludar{
    constructor(){
        console.log('Hola, soy una clase exportada por default');
    }
}