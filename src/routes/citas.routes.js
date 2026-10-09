import { Router } from 'express';

const router = Router();

//Definicion de rutas para citas 
router.get('/', (rq, res) => {
    res.send('Listar todas las citas del dia')
});
router.post('/', (req, res) => {
    res.send('Regitrar Cita')
});
router.put('/', (req, res) => {
    res.send('Actualizar todas las propiedades de una cita')
});
router.patch('/', (req, res) => {
    res.send('Actualizar una o mas propiedades de las citas')
});
router.delete('/', (req, res) => {
    res.send('Eliminar Cita')
});

export default router; 