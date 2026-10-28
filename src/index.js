import express from 'express';
import conexion from './config/mongo.config.js'; 
import citasRoute from './routes/citas.routes.js';
import categoriesRoute from './routes/categories.routes.js';
import insumosRoute from './routes/insumos.routes.js';
import usuariosRoute from './routes/Usuarios.routes.js';
import authRoute from './routes/auth.routes.js' 
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


// Enlazar todas las rutas de la app
app.use( '/api/users', usuariosRoute)
app.use( '/api/citas', citasRoute);
app.use( '/api/categories', categoriesRoute );
app.use( '/api/insumos', insumosRoute);
app.use( '/api/auth', authRoute)


//Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor está corriendo en http://localhost:${port}`);
});