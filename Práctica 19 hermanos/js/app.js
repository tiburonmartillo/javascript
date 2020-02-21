const button = document.getElementById('btncalcular');

button.addEventListener('click',comparar);

function comparar(){
    let nombre1 = String (document.getElementById('nombre1').value);
    let edad1 = Number (document.getElementById('edad1').value);
    let nombre2 = String (document.getElementById('nombre2').value);
    let edad2 = Number (document.getElementById('edad2').value);

    if(edad1>edad2){

        let imprimir = document.getElementById('imprimir');
        
        imprimir.innerHTML = `<div class="alert alert-danger col-12 text-center mt-3">${nombre1} es mayor y la diferencia de edad con ${nombre2} es de ${edad1 - edad2}años</div>`
    } else {
        imprimir.innerHTML = `<div class="alert alert-danger col-12 text-center mt-3">${nombre2} es mayor y la diferencia de edad con ${nombre1} es de ${edad2 - edad1} años</div>`
    }
}