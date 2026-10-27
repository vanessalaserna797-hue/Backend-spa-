import { verifyPassword } from '../helpers/bcrypt.helpers.js'
import { dbGetCita } from '../services/citas.services.js';
const loginCita = async (req, res ) => {

    //Paso 1: Obtener las credenciales del usuario
    const inputData = req.body;

    //Valida si el campo email No viene dentro de las inputData
    if(! inputData.email ){
        
        res.json({ masg: 'Se olvido pasar el corrreo en el campo email' });
    }
    
    //Valida si el campo password NO viene dentro de las inputData
    if(! inputData.password){
        res.json({ msg: 'Se olvido pasar la contraseña en el campo password' });
    }

    //Paso 2: Verificar el usuario existe ¿email esta registrado en la BD
    const userFound = await dbGetUserByEmail (inputData.email)

    if(! userFound) {
        res.json({
            msg: 'El usuario no existe. Por favor registrese'
        });
    }

    //Paso 3: Verificar si la contrase es valida
    const isValid = verifyPassword ( inputData.password, userFound.password)

    console.log({ isValid });

    //Paso 4: Generar el token (tarjeta que presento que autentica y autoriza)
    const payload = {
        _id: userFound._id,
        name: userFound.name,
        email: userFound.email,
        role: userFound.role
        

    }

    const token = generateToken(payload); 

    //Paso 5: Responder al cliente (enviar el token. IMPORTANTE no devolver el password)
    const jsonObj = userFound.toObject()

    delete jsonObj.password

    res.json({
        msg:'Login de Cita',
        token: token,
        data: jsonObj
    });
}

export {
    loginCita,
    verifyPassword,
    dbGetCita
}