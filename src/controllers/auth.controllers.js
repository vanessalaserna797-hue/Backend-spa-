import { verifyPassword } from '../helpers/bcrypt.helpers.js';
import { generateToken } from '../helpers/jwt.helpers.js';
import { dbGetUserByEmail } from '../services/usuarios.services.js';

const loginUser = async (req, res ) => {
    try {

        //Paso 1: Obtener las credenciales del usuario
        const inputData = req.body;

        //Valida si el campo email No viene dentro de las inputData
        if( ! inputData.email ){
            
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
            role: userFound.role,
            status: userFound.status
            

        }

        const token = generateToken(payload); 

        //Paso 5: Responder al cliente (enviar el token. IMPORTANTE no devolver el password)
        const jsObj = userFound.toObject();

        delete jsObj.password;

        res.json({  
            msg:'Login de Usuarios',
            token: token,
            data: jsObj
        });
            
    } catch (error) {
        console.error(error);

        res.json({
            msg:'No se pudo autenticar el usuario'
        });
    }

   
}

const renovarToken = (req, res) => {
    try {
        //Paso 1: Obtiene los datos delñ usuario que le envia el middleware de authentication
        const userFound = req.userFound;
        //Paso 2: crear un payload y generamos el token
        const newPayload = {
            _id: userFound._id,
            name: userFound.name,
            email: userFound.email,
            role: userFound.role,
            status: userFound.status
        }
    
        const newToken = generateToken( newPayload );

        //paso 3: voy a eliminar las propiedades sensibles del objeto retornado 
        const jsObj = userFound.toObject();

        delete jsObj.password;      //Elimina el campo pasword que le retornamos al usuario 

        res.json({
            msg: 'Autenticacidad del Token Verificada con exito',
            token: newToken,
            data: jsObj
        });
        
    } catch (error) {
        console.error( error );

        res.json({ 
            msg: 'No se pudo verificar la autenticidad de las credenciales'
        });
    }
}

export {
    loginUser,
    renovarToken
}