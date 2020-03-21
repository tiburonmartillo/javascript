
eventListener();
let primos = [];

function eventListener() {
    document.getElementById('iniciar').addEventListener('click', initApp);
}
function initApp(e) {

    for (let i = 2; i < 1000; i++) {
        let primo = true;
        for (let y = 2; y < i; y++) {

            if (i % y === 0) {
                primo = false;
                break;
            }
        }
        if (primo) primos.push(i);
    }
    let imprimir = document.getElementById('zonaPrint');
    primos.reverse();
    imprimir.innerText = primos;
    console.log(primos);

}

