import express from 'express'
import { listCarros, carro, delCarro, agregarCarro} from "../controllers/constroller.js"

const router = express.Router();

router.get('/vehiculos', listCarros);
router.post('/vehiculos', agregarCarro);
router.get('/vehiculos/:id', carro);
router.delete('/vehiculos/:id', delCarro);


export default router