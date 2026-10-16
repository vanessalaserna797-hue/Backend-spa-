import {Router} from "express";
import {createCategory, getCategories, deleteCategory, updateCategory, getCategory} from "../controllers/categories.controllers.js";

const router = Router(); //Estancia de las rutas de express 

//Define las rutas para las categorias
router.post('/', createCategory);
router.get('/', getCategories);
router.delete('/:id', deleteCategory);
router.patch('/:id', updateCategory);
router.get('/:id', getCategory);

//Exportar las rutas definidas en este archivo 
export default router;