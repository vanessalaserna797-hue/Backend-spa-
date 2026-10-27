import { Router } from "express.js";
import { registrarCita } from "../controllers/citas.controllers.js";
import { loginCita, verifyAuthenticate } from "../controllers/auth.controllers.js";

//crea una instancia de las rutas de express
const router = Router();

//Define las rutas para la autenticacion 

//1. Registro publico de citas (default: CUSTOMER) middleware asegurate que solo resgistre CUSTOMER 
router.post( '/register', createCita );

//2. Login de usuarios 
router.post( '/renew-token', verifyAuthenticate );

//3. Renovacion de credenciales (token)
router.get( '/renew-token', verifyAuthenticate );

//4. Recuperar contraseña
//5. Habilitar cuenta Registrada publicamente

// Exportar las rutas definindas en este archivo
export default authrouter