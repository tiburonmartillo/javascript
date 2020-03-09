eventListener();

function eventListener(){
    let button=document.getElementById('btnInit');
    button.addEventListener('click',IniciarApp);
}
function IniciarApp(){
    let numero=Number(prompt('Ingrese el número'));

    for(let i=2;i<=numero;i++){
        let primo=0;
        for(let j=1;j<=Math.floor(i/2);j++){
            if(parseInt(i)%parseInt(j)==0){
                primo+=parseInt(j);
            }
        }
        if(primo==i){
            const imprimir=document.getElementById('zonaPrint');
            imprimir.innerHTML=`Los números primos menores a ${numero} son:`;

            const numPrimos = document.getElementById('listaPrimos');
            const li = document.createElement('li');
            li.setAttribute('class', 'nav-item nav-link active m-3','col');
            li.innerText = `${i}`;
            numPrimos.appendChild(li);
            

            console.log("el número es",i);
            
        }
    }
}