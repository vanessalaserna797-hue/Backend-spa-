import express from 'express';
import conexion from './config/mongo.config.js'; 

import usuariosRoute from './routes/Usuarios.routes.js';

// Iniciar el servidor
const port = process.env.PORT || 3001;

// Instancia de express
const app = express();

 // Ejecuta la conexion a la base de datos
conexion();

// Habilita a la aplicacion para interpretar JSON
app.use( express.json() );

// Define 1 endpoint (ruta de entrada)
app.get('/health', (req, res) => {
    res.json({ msg: 'Servidor de Spa Funcionando!' });
});

// Enlazar todas las rutas de la aplicacion
app.use( '/api/users', usuariosRoute)

// Iniciar el servidor 


app.listen(port,() => {
    console.log(`servidor corriendo http://localhost:${port}`);
});