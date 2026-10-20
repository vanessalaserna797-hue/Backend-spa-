import { Router } from 'express'
import { createInsumos, deleteInsumos, getInsumo, updateInsumos } from '../controllers/insumos.controllers.js';

// Crea una instancia de las rutas de Express
const router = Router();

// Define las rutas para los productos 
router.post( '/', createInsumos);
router.get( '/', getInsumo); 
router.delete( '/:id', deleteInsumos);
router.patch( '/:id', updateInsumos);
router.get( '/:id', getInsumo)

// Exportar las rutas definidas en este archivo
export default router;