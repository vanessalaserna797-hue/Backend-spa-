import { ActualizarCita, ActualizarunaomasCitas, EliminarCita, listarCita, registrarCita } from '../controllers/citas.controllers.js';
import { Router } from 'express';

const router = Router();

//Definicion de rutas para citas 
router.get('/', listarCita );
router.post('/', registrarCita );
router.put('/', ActualizarCita);
router.patch('/', ActualizarunaomasCitas);
router.delete('/', EliminarCita);

export default router; 