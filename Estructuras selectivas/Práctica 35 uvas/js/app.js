const button = document.getElementById('btnCalcular');

button.addEventListener('click',calcular);

function calcular(){
    let tipo = Number (document.getElementById('tipo').value);
    let tamaño = Number (document.getElementById('tamaño').value);
    const imprimir = document.getElementById('imprimir');
    const precio = Number(document.getElementById('precio').value);
    const kilos = Number(document.getElementById('kilos').value);

    if(tipo == 1 && tamaño == 1){
        resultado = kilos * (precio * 1.2)
    } else if (tipo == 1 && tamaño == 2){
        resultado = kilos * (precio * 1.30)
    } else if(tipo == 2 && tamaño== 1){
        resultado = kilos * (precio * 0.7)
    } else if(tipo == 2 && tamaño == 2){
        resultado = kilos * (precio * 0.5)
    }
    imprimir.innerHTML = `<div class="alert alert-success text-center mt-3">El tamaño de la uva es ${tamaño} y su tipo es ${tipo} su precio es de $${resultado}</div>`;
}