evenListener();
let array=[];

function evenListener(){
    document.getElementById('palabra').addEventListener('keypress',getSize);
    document.addEventListener('click', borrarInput);
}

function getSize(e) {
    if (e.key != 'Enter') return;
    if(e.target.value=='') return;
    if (!isNaN(e.target.value)) return;//target es el objetivo del e que en este caso es el value del input
    if (e.target.value <= 0) return;

    createArray(e.target.value);
    e.target.value = array;
     
}

function createArray(size) {
   
    for (let i = 0; i < size.length; i++) {

        array.push(size[i])
    } 
    array.reverse();
    console.log(array);

}
function borrarInput(e) {

    switch (e.target.id) {
        case 'palabra':
            e.target.value='';
            array=[];
             console.log(`borrar`);
            break;

        }
    
}
