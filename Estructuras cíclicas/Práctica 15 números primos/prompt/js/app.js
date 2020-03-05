eventListener();
 function eventListener(){
     const button = document.getElementById('btnInit');
     button.addEventListener('click',iniciarApp);
 }
 function iniciarApp(){
     const numero=Number(prompt('ingrese un número positivo'));
 }