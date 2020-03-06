eventListener();
function eventListener(){
    const button=document.getElementById('btnInit');
    button.addEventListener('click',iniciarApp);
}
function iniciarApp(){
    let numeroDeFabricas=Number(prompt('ingrese el número de fábricas'));
        for(let i=1;i<=numeroDeFabricas;i++){

            let fabrica=String(prompt('Ingrese la clave de la fábrica'));
            const listaIngresos=document.getElementById('listaIngresos');
            const mayor3500=document.getElementById('mayor3500');

            let acumulador=0;
            let numeromayor=0;
            for(let mes=1;mes<=12;mes++){
                let ingreso=Number(prompt(`Ingreso del mes ${mes}`));
                {
                    acumulador+=ingreso;
                    
                    let imprimir=document.getElementById('zonaPrint');
                    imprimir.innerHTML=`El total anual de ${fabrica} es de $${acumulador}`;
                    console.log(acumulador);
                    
                }
                if(ingreso>=3000000 && mes==7){
                    const li = document.createElement('li');
                    li.setAttribute('class', 'list-group-item list-group-item-danger','col',);
                    li.innerText = `Fábrica ${fabrica} en el mes de Julio es mayor a $300000`;
                    mayor3500.appendChild(li);
                }
                
            }
            if(numeromayor<acumulador){
                numeromayor=acumulador;
                console.log(numeromayor);
                

                
            }
            
        }
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item list-group-item-info','col');
        li.innerText = `La fábrica que produjo más es ${fabrica} con un ingreso de ${acumulador}`;
        listaIngresos.appendChild(li);
}