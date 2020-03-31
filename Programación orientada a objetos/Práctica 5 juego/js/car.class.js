class Carro {
    posicionX = 0;
    posicionY = 0;
    constructor(posicionX, posicionY,) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
    }

    moverCarro(direccion, imagen) {
        switch (direccion) {
            case 'ArrowUp':
                if (this.posicionY <= 0) return;
                imagen.src = './../assets/arriba.svg';
                imagen.style.top = `${this.posicionY-=10}px`;
                break;

            case 'ArrowLeft':
                if (this.posicionX <= -4) return;
                imagen.src = './../assets/izq.svg'
                imagen.style.left = `${this.posicionX-=10}px`;
                break;

            case 'ArrowRight':
                if (this.posicionX >= 870) return;
                imagen.src = './../assets/der.svg'
                imagen.style.left = `${this.posicionX+=10}px`;
                break;

            case 'ArrowDown':
                if (this.posicionY >= 470) return;
                imagen.src = './../assets/abajo.svg'
                imagen.style.top = `${this.posicionY+=10}px`;
                break;
        }
       
       
    }

    verificarColision(posicionesHuellas = []) {
    console.log(this.posicionX,this.posicionY);

        for (let i = 0; i < posicionesHuellas.length; i++) {
            if (
                this.posicionX >= posicionesHuellas[i].styleLeft && 
                this.posicionX <= posicionesHuellas[i].styleLeftMax && 
                this.posicionY >= posicionesHuellas[i].styleTop && 
                this.posicionY <= posicionesHuellas[i].styleTopMax
                ) {
                return i;
            }
        }

        return null;
    }

}