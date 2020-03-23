eventListener();
let array=[0,1,2,3,4,5,6,7,8,9];
function eventListener(){
    document.getElementById('iniciar').addEventListener('click',iniciar);
}

function iniciar(e){

    let invertir=array.reverse();
    let imprimir=document.getElementById('zonaPrint');
    imprimir.innerText=invertir;
    console.log(invertir);
    
}