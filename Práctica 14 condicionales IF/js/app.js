
const button = document.getElementById('btnComparar');

button.addEventListener('click',compararNumeros);

function compararNumeros(){
    let numero1 = Number (document.getElementById('inputnumero1').value);
    let numero2 = Number (document.getElementById('inputnumero2').value);

    const divAlert = document.getElementById('printAlert');
 

    if(numero1>numero2){
        console.log('Numero A es Mayor')
    } else {
        console.log('Numero B es Mayor')
    }

    divAlert.innerText = ;
}