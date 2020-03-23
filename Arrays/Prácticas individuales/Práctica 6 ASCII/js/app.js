
EventListener();
let array=[];

function EventListener() {
  document.getElementById('palabra').addEventListener('keypress', iniciar);
  document.addEventListener('click', borrarInput);

}

function iniciar(e) {
  if (e.key != "Enter") return;
  if (!isNaN(e.target.value)) return;
  if (e.target.value == "") return;

  ascii(e.target.value);
  e.target.value = array.join(" | ");
}

function ascii(medidaArray){
    for( let i=0;i<medidaArray.length;i++){
        array[i]=medidaArray.charAt(i).charCodeAt(0)+3;

        array.push();
        
    }
    console.log(array);

}

function borrarInput(e) {

    switch (e.target.id) {
        case 'palabra':
            e.target.value='';
            array=[];
             console.log(`borrar input y reiniciar valor`);
            break;

        }
    
}