class Foco {
    estado = false;
    cambiarEstado() {
        this.estado = !this.estado;
        if (this.estado) {
            return "./../assets/apagado.jpg";
        } else return "./../assets/prendido.jpg";
        
    }
}