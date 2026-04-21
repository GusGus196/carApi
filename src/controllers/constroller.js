import { Alumno, grupo } from "../alumnos.js";

export const listarAlumnos = async(req, res) => {
    console.log(grupo.alumnos);
    res.json(grupo.alumnos);
};

export const agregarAlumno = async(req, res) => {
    const data = req.body;
    if(!data.numcuenta){
        return res.status(500).json({message: "Falta información"});
    }
    
    const alumno = new Alumno(data.numcuenta, data.nombre, data.semestre);
    console.log(data);
    let validacion = grupo.agregar(alumno);

    if(validacion != -1){
        res.status(201).json({
            message: "alumno agregado",
            data
        }); 
    } else{
        res.status(408).json({
            message: "Numero de cuenta repetido"
        }); 
    }
};

export const alumno = async(req, res) => {
    const { numcuenta } = req.params;
    const alumno = grupo.buscar(numcuenta);
    res.json(alumno);
};

export const delAlumno = async(req, res) => {
    const { numcuenta } = req.params;
    grupo.eliminar(numcuenta);
    return res.status(201).json(grupo.alumnos);
};

export const editarAlumno = async (req, res) => {
    const { numcuenta } = req.params;
    const data = req.body;
    const actualizado = grupo.editarAlumno({
        numcuenta,
        ...data
    });
    if (!actualizado) {
        return res.status(404).json({ message: "Alumno no encontrado" });
    }
    return res.status(200).json(actualizado);
};