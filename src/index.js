
import express from 'express';  //CommonJs}
import citasRoute from'./routes/citas.routes.js';

//EsModule
const app = express();

//define 
app.get('/health', (req, res) => {
    res.send('Servidor de Spa Keydy')
});

//Enlazar todas las rutas de aplicacion
app.use('/api/cita', citasRoute);

// Iniciar el servidor 

const port = 3000;
app.listen(port, () => {
    console.log(`servidor corriendo http://localhost:${port}`);
});