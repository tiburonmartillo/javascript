eventListener();
let pregunta=document.getElementById('pregunta');

function eventListener(){
    document.getElementById('ingresarPregunta').addEventListener('click',presentarPregunta);
  

}

function presentarPregunta(){
    let preguntaAvotar=document.createElement('div');
    preguntaAvotar.setAttribute('class','text-center col-12 mt-5 mb-5')
    preguntaAvotar.innerText=pregunta.value;
    
    let aFavor=document.createElement('button');
    aFavor.setAttribute('class','btn btn-warning col-3 ml-1 mr-1')
    aFavor.setAttribute('id','afavor')
    aFavor.innerText="A favor"

    let enContra=document.createElement('button');
    enContra.setAttribute('class','btn btn-danger col-3 ml-1 mr-1')
    enContra.setAttribute('id','encontra')
    enContra.innerText="Encontra"

    let abstencion=document.createElement('button');
    abstencion.setAttribute('class','btn btn-success col-3 ml-1 mr-1')
    abstencion.setAttribute('id','abstencion')
    abstencion.innerText="Abstención"


    let votaciones=document.getElementById('votaciones');

    votaciones.appendChild(preguntaAvotar)
    votaciones.appendChild(aFavor)
    votaciones.appendChild(enContra)
    votaciones.appendChild(abstencion)



    console.log(pregunta.value);
    botones();
}

function botones(){
    document.getElementById('afavor').addEventListener('click',si);
    document.getElementById('encontra').addEventListener('click',no);
    document.getElementById('abstencion').addEventListener('click',nose);
}


function si(){
    let acumuladorSi=0
    acumuladorSi++
    console.log(acumuladorSi);
    
}
function no(){
    let acumuladorNo=0
    acumuladorNo+=1
    console.log(acumuladorNo);
    
    
}
function nose(){
    let acumuladorNose=0
    acumuladorNose++
    console.log(acumuladorNose);
    
    
}