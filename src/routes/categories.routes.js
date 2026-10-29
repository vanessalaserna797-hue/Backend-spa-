import {Router} from "express";
import {createCategory, getCategories, deleteCategory, updateCategory, getCategory} from "../controllers/categories.controllers.js";
import { authMiddleware } from "../middlewares/authenticate.middleware.js";

const router = Router(); //Estancia de las rutas de express 

//Define las rutas para las categorias
router.post('/', authMiddleware, createCategory);
router.get('/', authMiddleware, getCategories);
router.delete('/:id', authMiddleware, deleteCategory);
router.patch('/:id', authMiddleware, updateCategory);
router.get('/:id', authMiddleware, getCategory);

//Exportar las rutas definidas en este archivo 
export default router;