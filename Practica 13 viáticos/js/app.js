const button = document.getElementById('btncalcular');

button.addEventListener('click',calcular);

function calcular(){
    let dias = Number (document.getElementById('dias').value);
    let hotel = Number (document.getElementById('hotel').value);
    let comida = Number (document.getElementById('comida').value);

    viaticos = (hotel + comida + 100)* dias;
    
    let imprimirviaticos = document.getElementById('viaticos');

    imprimirviaticos.innerText = viaticos;
}