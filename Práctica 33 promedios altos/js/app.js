const button = document.getElementById('btnCalcular');

button.addEventListener('click',calcular);

function calcular(){
    let calif1 = Number (document.getElementById('calificacion1').value);
    let calif2 = Number (document.getElementById('calificacion2').value);
    let calif3 = Number (document.getElementById('calificacion3').value);
    let calif4 = Number (document.getElementById('calificacion4').value);
    let imprimir = document.getElementById('imprimir');
    let promedio = 0;
    let descartada = 0;
    sumadecalif = calif1 + calif2 + calif3 + calif4
    if(calif1 < calif2 && calif1 < calif3 && calif1 < calif4){
        promedio = ((sumadecalif - calif1) / 3).toFixed(1);
        descartada = calif1;
    } else if(calif2 < calif1 && calif2 < calif3 && calif2 < calif4){
        promedio = ((sumadecalif - calif2) / 3).toFixed(1);
        descartada = calif2;
    } else if (calif3 < calif1 && calif3 < calif2 && calif3 < calif4){
        promedio = ((sumadecalif - calif3) / 3).toFixed(1);
        descartada = calif3;
    } else if (calif4 < calif1 && calif4 < calif2 && calif4 < calif3){
        promedio = ((sumadecalif - calif4) / 3).toFixed(1);
        descartada = calif4;
    }
imprimir.innerHTML = `<div class="alert alert-danger text-center">El promedio del alumno es ${promedio} y la calificación descartada es ${descartada}</div>`
}