let imprimir = document.getElementById('zonaPrint');
function eventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click',ordenarNumeros);
}
eventListener();
function ordenarNumeros(){

    let continuar = true;
    let ags = 70, zac = 150;
    while(continuar){
        zac--
        ags++
        if (ags == zac){
            
            
            console.log("son iguales",ags,zac);
            imprimir.innerHTML=`Son iguales en el kilómetro ${ags}`;
            continuar = false
            // !continuar
        } 
        

        }
    }
    
    // for(let zac=150; zac>=70; zac--){
    //     const listGroup = document.getElementById('listazac');
    //     const li = document.createElement('li');
        
    //     li.setAttribute('class','list-group-item');
    //     li.innerText=`${zac}`;
    //     listGroup.appendChild(li);
    //     if(zac == 110){
    //         li.classList.add('bg-success')
    //     }
    // }
    // }

    
    // for(let ags=70; ags<=150; ags++){
        
    //     const listGroup2 = document.getElementById('listaags');
    //     const li = document.createElement('li');
    //     li.setAttribute('class','list-group-item');
    //     li.innerText=`${ags}`;
    //     listGroup2.appendChild(li);
    //     if (ags == 110){
    //         li.classList.add('bg-success')
    //     }
    // }

         