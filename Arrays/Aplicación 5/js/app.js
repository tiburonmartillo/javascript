eventListener();
let ArregloNumerosPrimosGlobal = [];


function fillArrayGlobal() {
    for (let i = 0; i < 1000; i++) {
        let bandera = true;
        for (let y = 2; y < i; y++) {
            if (i % y == 0) {
                bandera = false;
                break;
            }
        }
        if (bandera == true) {
            ArregloNumerosPrimosGlobal.push(i);
        }
    }

}

function eventListener() {
    document.addEventListener("DOMContentLoaded", fillArrayGlobal)
    document.getElementById('tamanoArray').addEventListener('keypress', initApp);
}

function initApp(event) {
    if (event.key != "Enter") return;   //validaciones de neter, no en blanco, mayor que cero y que sea número.
    if (event.target.value == "") return;
    if (event.target.value <= 0) return;
    if (isNaN(event.target.value)) return;

    fillArray(event.target.value);


}

function fillArray(tamanoArray) {
    let ArregloNumerosPrimos = [];
    let numeroaleatorio=0;

    for (let i = 0; i < tamanoArray; i++) {
    numeroaleatorio = Math.floor(Math.random() * (ArregloNumerosPrimosGlobal.length - 1)) + 1

    ArregloNumerosPrimos.push(ArregloNumerosPrimosGlobal[numeroaleatorio]);
        
    }
    console.log(ArregloNumerosPrimos);
    
    let mayor = Math.max(...ArregloNumerosPrimos);
    console.log(mayor);
    
    
    let total = 0, numeros = ArregloNumerosPrimos;
    for (let i of numeros) total += i;
    console.log(total);
    


        let zonaPrint=document.getElementById('zonaPrint');
        zonaPrint.setAttribute('class','text-center');
        zonaPrint.innerHTML=`Los números primos son ${ArregloNumerosPrimos}. <br>
        El número mayor es ${mayor} y la suma de los números es ${total}`;
}