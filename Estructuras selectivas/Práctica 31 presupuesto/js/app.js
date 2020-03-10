const button = document.getElementById('btnCalcular');

button.addEventListener('click',calcular);

function calcular(){
    let producto1 = Number (document.getElementById('producto1').value);
    let producto2 = Number (document.getElementById('producto2').value);
    let producto3 = Number (document.getElementById('producto3').value);
    let producto4 = Number (document.getElementById('producto4').value);
    let presupuesto = Number(document.getElementById('presupuesto').value);

    resultado = producto1 + producto2 + producto3 + producto4;

    let imprimir = document.getElementById('imprimir');

    if(resultado <= presupuesto){
        imprimir.innerHTML = `<div class="alert alert-warning mt-3 text-center"><p>El precio está dentro de presupuesto</p></div>`;
    } else{
        imprimir.innerHTML = `<div class="alert alert-danger mt-3 text-center"><p>El precio está fuera de presupuesto</p></div>`;

    }


}