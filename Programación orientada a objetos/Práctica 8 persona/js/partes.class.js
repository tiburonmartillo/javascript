class Partes{
    partes='';
    mostrars='';

    constructor(parte,mostrar)
    parte=this.partes;
    mostrar=this.mostrars;


   static mouseEncima(parte){
        document.querySelector('#cabeza').addEventListener('mouseover', imprimirCabeza);
        document.querySelector('#pantalon').addEventListener('mouseover', imprimirPantalon);
        document.querySelector('#camisa').addEventListener('mouseover', imprimirCamisa);
    
    }

   static imprimir(mostrar){
        function imprimirCabeza() {
            boton.innerHTML=`${texto} cabeza`
        }
        function imprimirPantalon() {
            boton.innerHTML=`${texto} pantalon`
        }
        function imprimirCamisa() {
            boton.innerHTML=`${texto} camisa`
        }
    }
}