export class Alumno{
    constructor(numCuenta, nombre, semestre){
        this.numCuenta = numCuenta,
        this.nombre = nombre,    
        this.semestre = semestre;
    }
}

class Grupo{
    constructor(){
        this.alumnos = [];
    }

    agregar(alumno) {
        for (let i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].numCuenta === alumno.numCuenta) {
                return -1;
            }
        }
        this.alumnos.push(alumno);
        return 1; 
    }

    buscar(numcuenta) {
        for (let i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].numCuenta === numcuenta) {
                return this.alumnos[i];
            }
        }
        return null; 
    }

    eliminar(numcuenta){
        let posicion = -1;
        for(let i = 0; i < this.alumnos.length; i++){
            if(this.alumnos[i].numCuenta == numcuenta){
               posicion = i;
               break;
            }
        }
        if(posicion !== -1){
            this.alumnos.splice(posicion, 1);
        }
        return this.alumnos;
    }

    editarAlumno(data) {
        const alumno = this.buscar(data.numcuenta);

        if (!alumno) {
            return null;
        }

        if (data.nombre !== undefined && data.nombre !== null && data.nombre !== "") {
            alumno.nombre = data.nombre;
        }

        if (data.semestre !== undefined && data.semestre !== null) {
            alumno.semestre = data.semestre;
        }

        return alumno;
    }
}

export const grupo = new Grupo();
let alumno = new Alumno("1", "Gus", "3");
grupo.agregar(alumno);
alumno = new Alumno("2", "David", "3");
grupo.agregar(alumno);
alumno = new Alumno("3", "Angel", "3");
grupo.agregar(alumno);

console.log(Grupo.alumnos);