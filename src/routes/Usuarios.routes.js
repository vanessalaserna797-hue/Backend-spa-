import { Router } from 'express';
import { createUsers, deleteUser, getUsers, updateUser,} from '../controllers/usuarios.controllers.js';

// Crea una instancia de las rutas de express
const router = Router();

// Define las rutas 
router.post('/', createUsers);
router.get('/', getUsers);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

// Exportar las rutras definidas en este archivo
export default router;