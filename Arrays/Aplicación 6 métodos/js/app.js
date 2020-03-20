
//.lenght: la longitud del array
//.push: agrega a la ultima posición de un array‹
//.pop: elimina la ultima posición de un array
//.unshif: agrega elementos a la primera posición del array
// .shift elimina la primera posición del array
// opcion 1: tomar un arrar principal y a cada index impar sustituir su valor por un cero
//opcion 2: eliminar el último elemento del array
//opción 3: agregar un elemento a la primera posición de un array
//opción 4: eliminar un elemento en la primera posición del array
//opción 5: regresa un index
//indexof(10)regresa un index en caso de que no contenga un 10 regresa un -1
// opción 6: ordenar un array
//.sort(): ordena los numeros ascendentes
//opción 7: ordena el array invertido
//.reverse(): ordena en reversa los array
//opción 8: cambiara todos los elementos 5 por la palabra 'cinco'
//.splice: intercambia un array por otro que se ingresa
evenListener();

let array = [];
let outArray = [];

function evenListener() {
    document.getElementById('size').addEventListener('keypress', getSize);
    document.addEventListener('click', validarClick);// esta atento al click en cualquier parte del html
}
//e = event sólo está recibiendo el parametro del evento que está escuchando
function getSize(e) {
    if (e.key != 'Enter') return;
    if (e.target.value == '') return;
    if (isNaN(e.target.value)) return;//target es el objetivo del e que en este caso es el value del input
    if (e.target.value <= 0) return;

    createArray(e.target.value);
    e.target.value = '';
}

function createArray(size) {
    array = [];
    for (let i = 0; i < size; i++) {

        array.push(Math.floor(Math.random() * (11 - 1) + 1))
    } console.log(array);

}

function validarClick(e) {

    switch (e.target.id) {
        case 'op1':
            for (let i = 0; i < array.length; i++) {
                if ((i + 1) % 2 == 0) {
                    outArray.push(0)
                } else {
                    outArray.push(array[i])
                }
            } console.log(outArray);
            break;

        case 'op2':

            array.pop();
            console.log(array);
            break;
        case 'op3':
            let random = Math.floor(Math.random() * (11 - 1) + 1);
            array.unshift(`nuevo: ${random}`);
            console.log(array);
            break;

        case 'op4':
            array.shift();
            console.log(array);
            break;

        case 'op5':
            let indices = [];
            let index = array.indexOf(10);
            while (index != -1) {
                indices.push(index)
                index = array.indexOf(10, index + 1)
            } console.log(indices);
            break;

        case 'op6':
            //.sort ordena los numeros - mayusculas - minusculas
            console.log(array.sort());
            break;

         case 'op7':  
            console.log(array.reverse());
            break;
            
        case 'op8':
            for(let i=0;i<array.length;i++)

                if(array[i]==5){
                    array.splice(i,1,'cinco')
                }
            console.log(array);
            
            break;

        default:
            return;
            break;

    }

}
