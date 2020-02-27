function eventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click',initApplication)
}
eventListener()

function initApplication(){
    const cantidades = Number(prompt('Números a evaluar:'));
    let acumuladorMenores = 0;
    let acumuladoresMayores = 0;
    for(let x=0; x<cantidades; x++){

        let numero = Number(prompt('Número a evaluar'));

        if(numero<=0){
            acumuladorMenores++;
        }else{
            acumuladoresMayores++;
        }
    }
    let imprimir = document.getElementById('zonaPrint');
    imprimir.innerText = `Los mayores son ${acumuladoresMayores} y los menores son ${acumuladorMenores}`;

}