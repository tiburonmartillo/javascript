eventListener();
function eventListener(){
    const button=document.getElementById('btnInit');
    button.addEventListener('click',IniciarApp);
}

function IniciarApp(){
for(let i=1;i<=365;i++){

   let ahorro=Math.pow(3,i);
    let pesos=ahorro*.01;
    const lista=document.getElementById('lista');

    const imprimir=document.getElementById('zonaPrint');
    imprimir.setAttribute('class','alert alert-danger text-center mt-3 ')
    imprimir.innerHTML=`El ahorro total en un año es de $1.4101261703381586e+172`;

    const centavos=document.createElement('li');
    centavos.setAttribute('class','list-group-item col')
    centavos.innerText=`El día ${i} el ahorro es de: $${pesos}`;
    lista.appendChild(centavos);

    console.log(`el día ${i} el ahorro es de ${pesos}`);
    
}
}