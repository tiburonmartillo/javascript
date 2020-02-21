const button = document.getElementById('btnProduccion');

button.addEventListener('click',promedio);

function promedio(){
    let dia1 = Number (document.getElementById('dia1').value);
    let dia2 = Number (document.getElementById('dia2').value);
    let dia3 = Number (document.getElementById('dia3').value);
    let dia4 = Number (document.getElementById('dia4').value);
    let dia5 = Number (document.getElementById('dia5').value);
    let dia6 = Number (document.getElementById('dia6').value);

    resultado = (dia1 + dia2 + dia3 + dia4 + dia5 + dia6) / 6;

    if(resultado >= 100){
        let imprimir = document.getElementById('imprimir');
        imprimir.innerHTML = resultado;
        // imprimir.innerHTML = `<div class="alert alert-warning mt-3"><p>El promedio de el operario es ${resultado} y sí recibirá incentivos</p></div>`;
    } else {
        let imprimir = document.getElementById('imprimir');

        // imprimir.innerHTML = `<div class="alert alert-danger mt-3"><p>El promedio de el operario es ${resultado} y no recibirá incentivos</p></div>`;

    }
}