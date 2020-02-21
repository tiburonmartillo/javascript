const button = document.getElementById('btncalcular');

button.addEventListener('click',calcular);

let autobus = String (document.getElementById('autobus').value);
const kilometros = Number(document.getElementById('kilometros').value);
const personas = Number (document.getElementById('personas').value);

function calcular(){
    
    if( autobus = 1 && personas > 20){
        resultado = `<div class="alert alert-warning col-12">El costo por persona es de $${kilometros * 1.5} para ${personas} personas en el autobus A en un recorrido de ${kilometros} kilómetros siendo el total de $${(kilometros * 1.5) * personas}.</div>`;
        
        let imprimir = document.getElementById('imprimirCalculo');

        imprimir.innerHTML = resultado;

    } 
    else if (personas<=20){
        resultado = `<div class="alert alert-warning col-12">El costo por persona es de $${kilometros * 1.5} para ${personas} personas en el autobus A en un recorrido de ${kilometros} kilómetros siendo el total de $${(kilometros * 1.5) * 20}.</div>`;
        let imprimir = document.getElementById('imprimirCalculo');

        imprimir.innerHTML = resultado;
    } else if(autobus = 2 && personas > 20){
        resultado = `<div class="alert alert-warning col-12">El costo por persona es de $${kilometros * 1.5} para ${personas} personas en el autobus B en un recorrido de ${kilometros} kilómetros siendo el total de $${(kilometros * 1.5) * 20}.</div>`;
        let imprimir = document.getElementById('imprimirCalculo');

        imprimir.innerHTML = resultado;

    }
    
    
}