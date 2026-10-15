
import express from 'express';  //CommonJs}

import conexion from'./config/mongo.config.js';

import citasRoute from'./routes/citas.routes.js';
import categoriaRoute from './routes/categories.routes.js';

//EsModule
const app = express();          //Instancia de Express

conexion();         //ejecuta la coneccion a la base de datos


//Habilita mi aplicacion para imprementar JSON
app.use(express.json());

//define endpoint  (ruta de entrada)
app.get('/health', (req, res) => {
    res.send('Servidor de Spa Keydy')
});

//Enlazar todas las rutas de aplicacion
app.use('/api/cita', citasRoute);
app.use('/api/categories', categoriaRoute)

// Iniciar el servidor 

const port = 3000;
app.listen(port, () => {
    console.log(`servidor corriendo http://localhost:${port}`);
});