import { Router } from "express";

import { loginUser, renovarToken } from "../controllers/auth.controllers.js";
import { createUsers } from "../controllers/usuarios.controllers.js";
import { authMiddleware } from "../middlewares/authenticate.middleware.js";
import { authorizationMiddleware } from "../middlewares/authorization.middleware.js";

//crea una instancia de las rutas de express
const router = Router();

//Define las rutas para la autenticacion 

//1. Registro publico de citas (default: CUSTOMER) middleware asegurate que solo resgistre CUSTOMER 
router.post( '/register', createUsers );

//2. Login de usuarios 
router.post( '/login', loginUser );

//3. Renovacion de credenciales (token)
router.get( '/renew-token', authMiddleware, authorizationMiddleware, renovarToken );

//4. Recuperar contraseña
//5. Habilitar cuenta Registrada publicamente

// Exportar las rutas definindas en este archivo
export default router