import express from 'express';  //CommonJs
                                //EsModule
    const app = express();

    app.get('/health', (req, res) => {
        res.send('Servidor de Spa Keydy')
    });

    app.get('/cita', (req,res) => {
        res.send('Listar todas las citas del dia')
    });

    app.post('/cita', (req,res) => {
        res.send('Regitrar Cita')
    });

    app.put('/cita', (req,res) => {
        res.send('Actualizar todas las propiedades de una cita')
    });
    
    app.patch('/cita', (req,res) => {
        res.send('Actualizar una o mas propiedades de las citas')
    });

    //Eliminar
    app.delete('/cita', (req,res) => {
        res.send('Eliminar Cita')
    });
// Iniciar el servidor 

const port = 3000;
app.listen(port,() => {
    console.log(`servidor corriendo http://localhost:${port}`);
});