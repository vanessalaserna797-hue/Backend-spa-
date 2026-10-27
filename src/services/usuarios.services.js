import UsuariosModel from "../models/usuarios.model.js";

const dbCreateUser = async ( newUser ) => {
    return await UsuariosModel.create(newUser);     // Promesa resuelta (await)
}

const dbGetUsers = async () => {
    return await UsuariosModel.find({status: true});  // Consultar los usuarios registrados
}

const dbUpdateUser = async (id, categoryUpdated) => {
    return await UsuariosModel.findByIdAndUpdate(
        id,                 // El ID del documento que deseamos actualizar
        categoryUpdated,    // El objeto con los datos del Documento que deseamos actualizar
        {new: true}         // Configuracion para que retorne el documento actualizado
    );
}

const dbDeleteUsers = async (id) => {
    return await UsuariosModel.findByIdAndDelete( id );
}

export {
    dbCreateUser,
    dbGetUsers,
    dbUpdateUser,
    dbDeleteUsers
}