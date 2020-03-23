eventListener();
let array = [];
let media = [];

function eventListener() {
    document.getElementById('tamanoArray').addEventListener('keypress', tamañoArray);
}


function tamañoArray(e) {
    if (e.key != 'Enter') return;
    if (e.target.value == '') return;
    if (isNaN(e.target.value)) return;//target es el objetivo del e que en este caso es el value del input
    if (e.target.value <= 0) return;

    createArray(e.target.value);
}

function createArray(size) {


    for (let i = 0; i < size.length; i++) {
        array[i] = size[i];
    }
    

    console.log(array);
    console.log(size);

}


