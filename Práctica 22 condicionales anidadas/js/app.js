const button = document.getElementById('btn');

button.addEventListener('click',CompararNumeros);
function CompararNumeros(){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const num3 = Number(document.getElementById('num3').value);
    let imprimir = document.getElementById('imprimir');
    
    if(num1>num2){
        if(num1>num3){
            imprimir.innerText = num1;
        } else{
            imprimir.innerText = num3;
        }

    } else if(num2>num3){ 
            imprimir.innerText = num2;
        } else {
            imprimir.innerText = num3;
        }
}