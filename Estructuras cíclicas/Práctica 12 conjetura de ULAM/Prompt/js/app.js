eventListener();

function eventListener(){
    const button = document.getElementById('btnInit');
    
    button.addEventListener('click',iniciarApp);
}
function iniciarApp(){
    let numero = 0;
    numero = Number(prompt('Ingrese un número'));
    
    const listGroup = document.getElementById('listaULAM');
    
    while(numero!=1){
        if (numero%2==0){
            numero/=2
        }else {numero=(numero*3)+1}
        
       
        
        const li = document.createElement('li');
        li.setAttribute('class','list-group-item');
        li.innerText=`${numero}`;
        listGroup.appendChild(li);
    }

        
    }