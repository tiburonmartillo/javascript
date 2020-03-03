eventListener();

function eventListener(){
    const button = document.getElementById('btnInit');
    
    button.addEventListener('click',iniciarApp);
}

function iniciarApp(){
    const output = document.getElementById('listaPagos');
    
    
    const div = document.createElement('div');
    div.classList.add('form-group');
    const label = document.createElement('label');
    label.innerText=`Ingresa el número de meses:`;
    const input = document.createElement('input');
    input.setAttribute('type','number');
    input.setAttribute('class','form-control');
    input.setAttribute('id',`meses`);
    
    const div1 = document.createElement('div');
    div1.classList.add('form-group');
    const label1 = document.createElement('label');
    label1.innerText=`Ingresa la cantidad del primer pago:`;
    const input1 = document.createElement('input');
    input1.setAttribute('type','number');
    input1.setAttribute('class','form-control');
    input1.setAttribute('id',`pago`);
    
    const btnCalcular = document.createElement('button');
    btnCalcular.innerText = 'calcular';
    btnCalcular.setAttribute('class','btn btn-success col-12 mt-3');
    btnCalcular.setAttribute('id','btnCalcular');
    btnCalcular.addEventListener('click',calcular);

    output.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
    output.appendChild(div1);
    div.appendChild(label1);
    div.appendChild(input1);
    div.appendChild(btnCalcular);

    volverasumar();
}
function volverasumar(){
    let button = document.getElementById('btnCalcular');

    button.addEventListener('click',calcular);
}
    

function calcular(){
    let numerodemeses =Number (document.getElementById(`meses`).value);
    let pagoPrimermes =Number (document.getElementById(`pago`).value);
    let resultado = 0;
    resultado = pagoPrimermes;
        
        for(let i=1;i<=numerodemeses;i++){
            const li = document.createElement('li');
            li.setAttribute('class','list-group-item');

            console.log(pagoPrimermes)
            const listaPagos2 = document.getElementById('listaPagos2');
            
            li.innerHTML=`Pago del mes ${i} es ${pagoPrimermes}`;
            listaPagos2.appendChild(li);
            resultado *=2
        }
     
    
        const alertprint = document.getElementById('zonaPrint');
        alertprint.setAttribute('class','alert alert-danger')
        alertprint.innerHTML = `El pago total al final de los ${numerodemeses} meses es $${resultado - pagoPrimermes}` ;

    }
