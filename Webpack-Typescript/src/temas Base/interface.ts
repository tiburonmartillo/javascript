export interface Persona{
    id:number,
    nombre:string,
    apellido:string,
    edad:number,
    sexo:string, 
    estatura?:number,
}
export interface Salario{
    id:number,
    salario:number,
}

export interface Alumnos{

    id:number,
    Nombre:string,
    idCarrera:number,
}

export interface Carrera{
		idCarrera:number,
		carrera:string,
		idCentroEstudios:number,
	}

export interface CentroEstudios{
            id:number,
            Nombre:string,
        }
/********Interface+*********
son plantillas con tipos de datos
********+*********/