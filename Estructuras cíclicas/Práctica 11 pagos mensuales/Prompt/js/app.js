eventListener();

function eventListener(){
    const button = document.getElementById('btnInit');
    
    button.addEventListener('click',iniciarApp);
}
function iniciarApp(){
    
    let numerodemeses = Number(prompt('Ingrese el número de meses'));
    let pagoPrimermes = Number(prompt('Ingrese el pago del Primer mes'));

        let resultado = pagoPrimermes*(Math.pow(2,numerodemeses)-1);
        
        const ZonaImprimir = document.getElementById('output');
        
        ZonaImprimir.innerHTML = `El total de la suma de los ${numerodemeses} pagos es $${resultado}`
        
        console.log(resultado)
    }