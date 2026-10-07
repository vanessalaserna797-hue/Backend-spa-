import express from 'express';

    const app = express();

// Iniciar el servidor 

const port = 3000;
app.listen(port,() => {
    console.log(`servidor corriendo http://localhost:${port}`);
});