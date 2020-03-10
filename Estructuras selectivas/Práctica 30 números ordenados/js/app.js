const button = document.getElementById('btnordenar');

button.addEventListener('click',ordenar);

function ordenar(){
    let num1 = Number (document.getElementById('num1').value);
    let num2 = Number (document.getElementById('num2').value);
    let num3 = Number (document.getElementById('num3').value);
    const imprimir = document.getElementById('imprimir');

    if(num1 > num2 && num1 > num3 && num2 > num3){
        imprimir.innerHTML = `<div class="alert alert-success text-center">${num1} <br> ${num2} <br> ${num3}</div>`; 
    } else if(num2 > num1 && num2 > num3 && num1 > num3){
        imprimir.innerHTML = `<div class="alert alert-success text-center">${num2} <br> ${num1} <br> ${num3}</div>`; 
    } else if(num3 > num2 && num3 > num1 && num2 > num1){
        imprimir.innerHTML = `<div class="alert alert-success text-center">${num3} <br> ${num2} <br> ${num1}</div>`; 
    } else if(num1 > num2 && num1 > num3 && num3 > num2){
        imprimir.innerHTML = `<div class="alert alert-success text-center">${num1} <br> ${num3} <br> ${num2}</div>`; 
    } else if(num2 > num1 && num2 > num3 && num3 > num1){
        imprimir.innerHTML = `<div class="alert alert-success text-center">${num2} <br> ${num3} <br> ${num1}</div>`; 
    } else if(num3 > num1 && num3 > num2 && num1 > num2){
        imprimir.innerHTML = `<div class="alert alert-success text-center">${num3} <br> ${num1} <br> ${num2}</div>`; 
    }
}
