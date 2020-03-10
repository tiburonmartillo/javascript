const button = document.getElementById('btnComparar');

button.addEventListener('click',comparar);

function comparar(){
let numerodia = Number (document.getElementById('numerodedia').value);
let imprimir = document.getElementById('imprimir');
let dia = 0;

if(numerodia == 1){
    dia = 'Lunes';
} else if(numerodia == 2){
    dia = 'Martes';
} else if(numerodia == 3){
    dia = 'Miércoles';
} else if(numerodia == 4){
    dia = 'Jueves';
} else if(numerodia == 5){
    dia = 'Viernes';
} else if(numerodia == 6){
    dia = 'Sábado';
} else if(numerodia == 7){
    dia = 'Domingo';
}
imprimir.innerHTML = `<div class="alert alert-danger mt-3 text-center">${dia}</div>`

}