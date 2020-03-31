class Carro{
    posicionX=0;
    posicionY=0;

    constructor(posicionX,posicionY){
        this.posicionX=posicionX;
        this.posicionY=posicionY;
    }

    moverCarro(direccion,imagen){
        switch(direccion){
            case 'ArrowUp':
                if(this.posicionY<=0)return;
                imagen.src='./../assets/arriba.svg';
                imagen.style.top=`${this.posicionY--}%`;
                break;
                
                case 'ArrowLeft':
                if(this.posicionX<= -4)return;
                imagen.src='./../assets/izq.svg'
                imagen.style.left=`${this.posicionX--}%`;
                break;
                    
                case 'ArrowRight':
                if(this.posicionX>=97)return;
                imagen.src='./../assets/der.svg'
                imagen.style.left=`${this.posicionX++}%`;
                break;
                        
                case 'ArrowDown':
                if(this.posicionY>=92)return;
                imagen.src='./../assets/abajo.svg'
                imagen.style.top=`${this.posicionY++}%`;
                break;
        }
    }

}