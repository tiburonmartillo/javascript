eventListener();

function eventListener() {
    const button = document.getElementById('btnInit');
    button.addEventListener('click', iniciarApp);
}
function iniciarApp() {
    const numero = Number(prompt('ingrese un número positivo'));
    for (let i = 2; i <= numero; i++) {
        let primo = true;
        for (let x = 2; x < i; x++) {
            if (i % x == 0) {
                primo = false;
                break;
            }
        }
        if (primo) {
            let iteraciones = 0;
            iteraciones += i;
            console.log(i);

            let imprimir=document.getElementById('alertaPrimos');
            imprimir.innerText='los números primos son:';


            const listGroup = document.getElementById('zonaPrint');
            const li = document.createElement('li');
            li.setAttribute('class', 'list-group-item','col');
            li.innerText = `${i}`;
            listGroup.appendChild(li);
        }
    }

}