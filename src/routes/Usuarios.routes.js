import { Router } from 'express';
import { createUsers, deleteUser, getUsers, updateUser,} from '../controllers/usuarios.controllers.js';
import { authMiddleware } from '../middlewares/authenticate.middleware.js';

// Crea una instancia de las rutas de express
const router = Router();

// Define las rutas 
router.post('/', authMiddleware, createUsers);
router.get('/:id', authMiddleware, getUsers);
router.patch('/:id', authMiddleware, updateUser);
router.delete('/', authMiddleware, deleteUser);

// Exportar las rutras definidas en este archivo
export default router;