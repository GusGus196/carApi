import express from 'express'
import { listarAlumnos, alumno, delAlumno, agregarAlumno, editarAlumno} from "../controllers/constroller.js"

const router = express.Router();

router.get('/alumnos', listarAlumnos);
router.get('/alumnos/:numcuenta', alumno);
router.post('/alumnos', agregarAlumno);
router.delete('/alumnos/:numcuenta', delAlumno);
router.put('/alumnos/:numcuenta', editarAlumno);


export default router