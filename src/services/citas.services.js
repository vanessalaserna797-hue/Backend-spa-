//servicio se habla con la bases de datos 
//Estas funciones haran las consultas a la base de datos 
//TODO: Conectar el modelo de citas con la Base de datos 
import citaModel from '../models/cita.model.js'

const dbInsertCita = async (newCita) => {
    return await citaModel.create(newCita);
}

const dbReadCitas = async () => {
 return await citaModel.find({estado: confirmada}).populate('createdBy');
}

const dbUpdateCita = async (id, citaUpdated) => {
     return await citaModel.findOneAndUpdate({_id: id }, citaUpdated, {new: true});
}

const dbDelateCita = async (id) => {
    return await citaModel.findOneAndDelete({_id: id});
}
const dbGetCita = async (id) => {
    return await citaModel.findById(id);
}

export {
    dbInsertCita,
    dbReadCitas,
    dbUpdateCita,
    dbDelateCita,
    dbGetCita
}