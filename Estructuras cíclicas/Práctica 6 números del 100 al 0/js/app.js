function eventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click',ordenarNumeros);
}
eventListener();

function ordenarNumeros(){
    const listGroup = document.getElementById('listaNumeros');

    for(let i=100; i>=0; i--){
        
        const li = document.createElement('li');
        li.setAttribute('class','list-group-item');
        li.innerText=`${i}`;
        listGroup.appendChild(li);
    }
}