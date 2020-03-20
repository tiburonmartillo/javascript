eventListener();
const output = document.getElementById('output');
output.setAttribute('class','row mt-3 justify-content-around')

function eventListener() {
    document.getElementById('obtenerAleatorios').addEventListener('click', initApp);
}

let aleatorios = [];

function initApp() {

    aleatorios[0] = Math.floor(Math.random() * (100 - (-100)) - 100);
    aleatorios[1] = Math.floor(Math.random() * (100 - (-100)) - 100);

    const divNum = document.createElement('h1');
    
    const labelFG = document.createElement('span');
    labelFG.setAttribute('class','badge badge-secondary');
    labelFG.innerHTML = `A = ${aleatorios[0]} B = ${aleatorios[1]}`;

    const operacionA=document.createElement('button');
    operacionA.setAttribute('class','btn btn-outline-danger col-3');
    operacionA.setAttribute('id','btnA');
    operacionA.innerHTML=`C = ${aleatorios[0]} + ${aleatorios[1]}`;
    const operacionB=document.createElement('button');
    operacionB.setAttribute('class','btn btn-outline-success col-3');
    operacionB.setAttribute('id','btnB');
    operacionB.innerHTML=`C = ${aleatorios[1]} - ${aleatorios[0]}`;
    const operacionC=document.createElement('button');
    operacionC.setAttribute('class','btn btn-outline-info col-3');
    operacionC.setAttribute('id','btnC');
    operacionC.innerHTML=`C = ${aleatorios[1]} * ${aleatorios[0]}`;

    output.appendChild(divNum);
    divNum.appendChild(labelFG);
    output.appendChild(operacionA);
    output.appendChild(operacionB);
    output.appendChild(operacionC);

    obtenerResultado();

    console.log(aleatorios);
}
function obtenerResultado(){
    document.getElementById('btnA').addEventListener('click', calcularA);
    document.getElementById('btnB').addEventListener('click', calcularB);
    document.getElementById('btnC').addEventListener('click', calcularC);

    function calcularA(){
        console.log(aleatorios[0]+aleatorios[1]);
        
        const operacionA=document.createElement('div');
        operacionA.setAttribute('class','rounded-pill bg-danger col-6 mt-3 text-center text-light p-3');
        operacionA.setAttribute('id','btnA');
        operacionA.innerText=aleatorios[0]+aleatorios[1];
        output.appendChild(operacionA);
    }
    function calcularB(){
        console.log(aleatorios[1]-aleatorios[0]);
        const operacionA=document.createElement('div');
        operacionA.setAttribute('class','rounded-pill bg-success col-6 mt-3 text-center text-light p-3');
        operacionA.setAttribute('id','btnA');
        operacionA.innerText=aleatorios[0]-aleatorios[1];
        output.appendChild(operacionA);
    }
    function calcularC(){
        console.log(aleatorios[1]*aleatorios[0]);
        const operacionA=document.createElement('div');
        operacionA.setAttribute('class','rounded-pill bg-info col-6 mt-3 text-center text-light p-3');
        operacionA.setAttribute('id','btnA');
        operacionA.innerText=aleatorios[0]*aleatorios[1];
        output.appendChild(operacionA);
    }
    
}

