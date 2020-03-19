eventListener();
const output = document.getElementById('output');

function eventListener(){
    document.getElementById('obtenerAleatorios').addEventListener('click',initApp);
}

let aleatorioA=[]
let aleatorioB=[]

function initApp() {
    
    aleatorioA= Math.floor(Math.random() * (100 - (-100)) - 100);
    aleatorioB= Math.floor(Math.random() * (100 - (-100)) - 100);

    let C=[];
    C[0]=aleatorioA;
    C[1]=aleatorioB;

    const divFG = document.createElement('div');// crea un elemento div
        divFG.setAttribute('class', 'alert alert-danger mt-3');// con clase form group

        const labelFG = document.createElement('label');
        labelFG.innerText = `El valor de A es ${C[0]} y el de B es ${[1]}`;

        output.appendChild(divFG);// inserta el divFG en el output
        divFG.appendChild(labelFG);//inserta el labelFG en el divFG
       
    
        
        console.log(C);
  }


