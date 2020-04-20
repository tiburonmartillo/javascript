import {Persona}from './interface';

/********Spread Arrays+*********

********+*********/
const arreglo1 = [1, 2, 3, 4, 5, 6, 7];

const arreglo2= [8,9,10];

const arreglo3=[...arreglo1,...arreglo2,11,12,13];// con 3 puntos en cada array se enlaza la cadena de arrays

// console.log(arreglo3);


/********Sread Objects+*********

********+*********/


// const ObejetoPersona1={
//     nombre:'Elías',
//     apellido:'Sanzón',
//     edad:1,
//     sexo:'M',
// };
// const ObejetoPersona2={...ObejetoPersona1,edad:25}// sustituye la propiedad edad



const ObejetoPersona1:Persona={
    id:1,
    nombre:'lakj',
    apellido:'sdklfj',
    edad:23,
    sexo:'m',
    estatura:3
};

function sumarValores(x?:number,y?:number,z?:number){// signo de opcional ?
    let suma=x!+y!+z!;// signo que obliga a leer el dato

    // console.log(suma);
    

}

sumarValores(...arreglo2);