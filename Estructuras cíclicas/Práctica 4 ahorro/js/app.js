

function eventListener(){
    const button = document.getElementById('btnInit');

    button.addEventListener('click',initApp);
}

eventListener();

function initApp(){
    let acumulador = 0;
    const listGroup = document.getElementById('ListaAhorro');
    
    for(let i=1; i<=12; i++) {
        let saving = Number (prompt('¿Cuál es tu ahoro del mes?'));

         acumulador+=saving;

        const li = document.createElement('li');
        li.setAttribute('class','list-group-item');
        li.innerText=`El dinero ahorrado en el mes de ${i} es: ${acumulador}`;
        listGroup.appendChild(li);
    }

    const li = document.createElement('li');
    li.setAttribute('class','list-group-item bg-danger text-light');
    li.innerText= `El dinero ahorrado en el año es: ${acumulador}`;

    listGroup.appendChild(li);
}