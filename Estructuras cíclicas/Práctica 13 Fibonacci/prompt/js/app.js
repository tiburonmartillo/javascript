
function eventListener(){
    
    const button = document.getElementById('btnInit');
    button.addEventListener('click',iniciarApp);
}
eventListener()
function iniciarApp(){
    const listGroup = document.getElementById('listaFib');
    let numeroX=0;
    let numeroY=1;
    let interacciones=Number(prompt('numero de interacciones'));
    for(let i=0; i<=interacciones;i++){
        let resultado=numeroX+numeroY;

        numeroX=numeroY;
        numeroY=resultado;
    }
}