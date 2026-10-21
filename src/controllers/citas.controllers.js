//controlador define quien hace una accion especifica 
import {dbInsertarCita, dbReadCitas} from "../services/citas.services.js";
const listarCita = async (req, res) => {
    try {

        const newcita = await dbReadCitas();  

        res.json({msg:'Listar todas las citas del dia', cita: newcita})
    } catch (error) {  
        console.error(error);
        res.json({
            msg:'Error al registrar cita'
        })  
    }
};

const registrarCita = async (req, res) => { 
    try {
        const cita = req.body;
        const newcita = await dbInsertarCita(cita);  

        res.json({msg:'Listar todas las citas del dia', cita: newcita})
    } catch (error) {  
        console.error(error);
        res.json({
            msg:'Error al registrar cita'
        })  
    }
};

const ActualizarCita = (req, res) => {
    res.send('Actualizar todas las propiedades de una cita')
};

const ActualizarunaomasCitas = (req, res) => {
    res.send('Actualizar una o mas propiedades de las citas')
};

const EliminarCita = (req, res) => {
    res.send('Eliminar Cita')
};

export{
    EliminarCita, 
    listarCita,
    registrarCita,
    ActualizarCita,
    ActualizarunaomasCitas
}