const button = document.getElementById('btntotal');

button.addEventListener('click',sumar);

function sumar(){
    let horas = Number (document.getElementById('horas').value);
    const imprimirtotal = document.getElementById('imprimirtotal'); 
    
    if(horas <= 2){
        imprimirtotal.innerHTML = `Total $${horas * 5} por ${horas} horas precio por hora $5`;
    } else if (horas >= 3 && horas <= 5){
        imprimirtotal.innerHTML = `Total $${horas * 4} por ${horas} horas precio por hora $4`;
        
    } else if(horas >= 6 && horas <= 10){
        imprimirtotal.innerHTML = `Total $${horas * 3} por ${horas} horas precio por hora $3`;

    } else if(horas >= 11){
        imprimirtotal.innerHTML = `Total $${horas * 2} por ${horas} horas precio por hora $2`;

    }
}