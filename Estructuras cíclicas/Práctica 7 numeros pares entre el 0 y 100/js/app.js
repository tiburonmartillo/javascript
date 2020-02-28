function eventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click',numerospares);
}
eventListener();

function numerospares(){
    const listGroup = document.getElementById('listaPares');

    for(let i=2; i<=100; i+=2){
        
        const li = document.createElement('li');
        li.setAttribute('class','list-group-item');
        li.innerText=`${i}`;
        listGroup.appendChild(li);
    }
}