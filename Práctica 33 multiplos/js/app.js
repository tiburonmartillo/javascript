const button = document.getElementById('btnComparar');

button.addEventListener('click',comparar);

function comparar(){
    let num1 = Number (document.getElementById('num1').value);
    let num2 = Number (document.getElementById('num2').value);
    const imprimir = document.getElementById('imprimir');
    if(num1 % num2 == 0){
        comparación = `sí es`;
    } else{
        comparación = `no es`;
    }
    imprimir.innerHTML = `<div class="alert alert-warning text-center">${comparación}</div>`;
}