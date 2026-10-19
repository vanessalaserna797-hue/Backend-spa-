import{Router} from "express";
import {createInsumos} from '../controllers/insumos.controllers.js';

const router = Router();

router.post('/', createInsumos );


export default router;