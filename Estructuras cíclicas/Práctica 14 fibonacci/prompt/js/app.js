
function eventListener(){
    
    const button = document.getElementById('btnInit');
    button.addEventListener('click',iniciarApp);

}
eventListener()
function iniciarApp(){
    const listGroup = document.getElementById('listaFib');
    let numeroX=0;
    let numeroY=1;
    let interaciones=Number(prompt('numero de interaciones'));
    for(let i=0; i<=interaciones;i++){
        let resultado=numeroX+numeroY;

        numeroX=numeroY;
        numeroY=resultado;

        const li = document.createElement('li');
        li.setAttribute('class','list-group-item col-6');
        li.innerText=`${numeroX}`;
        listGroup.appendChild(li);
        if(interaciones<=numeroY && interaciones>numeroX){
            
            // const li = document.createElement('li');
            li.setAttribute('class','list-group-item col-6 text-danger');
            li.innerText=`${numeroX} es el numero menor o igual al ingresado`;
            // listGroup.appendChild(li);
}
        
        
    }
}