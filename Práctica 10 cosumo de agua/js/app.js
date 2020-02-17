// let largo;
// let ancho;
// let profundidad;
let btnCalcular;
// let precioagua;
let imprimirprecio;
let costototal;

btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click',calculo);

function calculo(){
    
   let largo = Number (document.getElementById('largo').value);
   let  ancho = Number (document.getElementById('ancho').value);
   let  profundidad = Number (document.getElementById('profundidad').value);
   let  precioagua = Number (document.getElementById('precioagua').value);
    
    costototal= (largo * ancho * profundidad) * (precioagua);
    
    imprimirprecio = document.getElementById('imprimirprecio');
    
    imprimirprecio.innerText = costototal;
}