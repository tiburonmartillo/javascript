eventListener();

let boton=document.querySelector('button');
let texto='Estás tocando mi'


function eventListener() {
    document.querySelector('#cabeza').addEventListener('mouseover', imprimirCabeza);
    document.querySelector('#pantalon').addEventListener('mouseover', imprimirPantalon);
    document.querySelector('#camisa').addEventListener('mouseover', imprimirCamisa);

}

function imprimirCabeza() {
    boton.innerHTML=`${texto} cabeza`
}
function imprimirPantalon() {
    boton.innerHTML=`${texto} pantalon`
}
function imprimirCamisa() {
    boton.innerHTML=`${texto} camisa`

}


