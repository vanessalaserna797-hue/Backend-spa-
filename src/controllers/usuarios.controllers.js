import { generatePassword } from "../helpers/bcrypt.helpers.js";
import { dbCreateUser, dbDeleteUsers, dbGetUsers, dbUpdateUser} from "../services/usuarios.services.js";

const  createUsers = async (req, res) => {
    try {
        // Extrae los datos del cuerpo de la peticion
        const inputData = req.body;

        inputData.password = generatePassword(inputData.password)

        // Usar el servicio para regitrar
        const data = await dbCreateUser(inputData);

        res.json({ msg: 'Registra usuario', data: data})
    } catch (error) {
        console.error(error);

        
        if (error.code == 11000){
            const field = Object.keys(error.keyValue)[0];
            
            return res.json({
                msg: `Error por duplicidad en el campo'${field}'`,
                [field]: `El campo'${field}' con el valor'${error.keyValue[field]}' ya se encuentra registrado`
            });
        }

        res.json({ msg: 'No se pudo registrar el usuario' });
    }
}

const getUsers = async (req, res) => {
    try {
        console.log(req.query);
        const query = req.query;

        const data = await dbGetUsers(query);

        res.json({
            msg: 'Lista de usuarios registrados',
            data: data
        });
    } catch (error) {
        console.error(error)

        res.json({ msg: 'No se pudo obtener los usuarios'})
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const inputData = req.body;

        const data = await dbUpdateUser(id, inputData)

        res.json({
            msg: 'Usuario actualizado',
            data: data
        });
    } catch (error) {
        console.error(error);

        res.json({ msg: 'No se pudo actualizar el usuario'})
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await dbDeleteUsers(id);

        res.json ({
            msg: 'Se elimino el usuario',
            data: data
        });
    } catch (error) {
        console.error(error);
        
        res.json({ msg: 'No se pudo borrar el usuario'})
    }
}

export {createUsers, getUsers, updateUser, deleteUser}