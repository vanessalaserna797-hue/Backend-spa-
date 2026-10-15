//servicio se habla con la bases de datos 
//Estas funciones haran las consultas a la base de datos 
//TODO: Conectar el modelo de citas con la Base de datos 
import citaModel from '../models/cita.model.js'

const dbInsertCita = async (newCita) => {
    return await citaModel.create(newCita);
}

const dbReadCitas = () => {}

const dbUpdateCita = () => {}

const dbDelateCita = () => {}

export {
    dbInsertCita,
    dbReadCitas,
    dbUpdateCita,
    dbDelateCita
}