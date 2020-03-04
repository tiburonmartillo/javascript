eventListener();
function eventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click',iniciarEleccion);
}
function iniciarEleccion(){
    
    let continuar = true;
    let candidato1=0;
    let candidato2=0;
    let candidato3=0;
    let candidato4=0;
    let contador=0;
  
    const div = document.createElement('alert');
    div.setAttribute('class','text-danger');

    while(continuar==true){
        const voto = Number(prompt('ingrese su voto'));
       
        if(voto==1){
            contador++
            candidato1 ++;
            let resultadoCandidato1=document.getElementById('ResultadoCandidato1');
            div.innerHTML=`Los votos del candidato 1 son ${candidato1} que representan el ${(candidato1*100)/(contador-1)}%`;
            resultadoCandidato1.appendChild(div);
        } else if(voto==2){
            contador++
            candidato2 ++;
            let resultadoCandidato2=document.getElementById('ResultadoCandidato2');
            div.innerHTML=`Los votos del candidato 2 son ${candidato2} que representan el ${(candidato2*100)/(contador-1)}%`;
            resultadoCandidato2.appendChild(div);
        } else if(voto==3){
            contador++
            candidato3 ++;
            let resultadoCandidato3=document.getElementById('ResultadoCandidato3');
            div.innerHTML=`Los votos del candidato 3 son ${candidato3} que representan el ${(candidato3*100)/(contador-1)}%`;
            resultadoCandidato3.appendChild(div);
        }else if(voto==4){
            contador++
            candidato4 ++;
            let resultadoCandidato4=document.getElementById('ResultadoCandidato4');
            div.innerHTML=`Los votos del candidato 4 son ${candidato4} que representan el ${(candidato4*100)/(contador-1)}%`;
            resultadoCandidato4.appendChild(div);
        }else if(voto==0 || voto>=5){
            contador--
            continuar=false; 
        } 
    }
    
    
    
   
   
   let imprimir = document.getElementById('zonaPrint');
   imprimir.innerText=`El total de votos es: ${contador}`;
   

   console.log()
   
}