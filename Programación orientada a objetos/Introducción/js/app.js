
// let carro1objeto = {
//     color: "azul",
//     marca: "honda",
//     modelo: 2002,
//     motor: 1.2,
//     posX:0,
//     posY:0,
//     avanzarX(){
//         console.log(this);
//     }
// };

// let carro2objeto = {
//     color: "rojo",
//     marca: "honda",
//     modelo: 2002,
//     motor: 1.2,
//     posX:0,
//     posY:0,
//     avanzarX(){
//         console.log(this.posX++);
//     },
//     avanzarY(){
//         console.log(this.posY++);

//     }
// };


class Carro {
    Color = "";  //propiedad
    Marca = "";
    Modelo = 0;
    Motor = 0;
    PosX = 0;
    PosY = 0;

    constructor(Color, Marca, Modelo, Motor) { 
        // console.log(this.Color);  this llama a la propiedad color
        this.Color=Color;// this Color (propiedad) es igual a Color (constructor)
        this.Marca=Marca;
        this.Motor=Motor;
    }

    avanzarX() { }   //comportamiento
    avanzarY() { }

}

let Carro1 = new Carro("rojo","honda",2015,1.8);
let Carro2 = new Carro("azul","nissan",2019,1.2);

console.log(Carro1.Marca);
console.log(Carro2.Marca);
