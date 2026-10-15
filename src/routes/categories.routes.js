import {Router} from "express";
import {createCategory} from "../controllers/categories.controllers.js";

const router = Router(); //Estancia de las rutas de express 

//Define las rutas para las categorias
router.post('/', createCategory);

//Exportar las rutas definidas en este archivo 
export default router;