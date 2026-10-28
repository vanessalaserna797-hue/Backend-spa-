import { generateToken, validateToken } from "../helpers/jwt.helpers.js";
import { dbGetUserByEmail } from "../services/usuarios.services.js";

const authMiddleware = async (req, res, next) => {
    //paso 1: Obtener 
    const token = req.header( 'X-Token' )
    const msg = 'Hola soy el middleware de autenticacion'

    console.log( 'msg:', msg );
    console.log( 'holllaaaaaaaaa');

    // Verifica que haya resivido una cadena

    //paso (2.1) 

    if(! token){
        res.status(401).json({
            msg: 'Cadena de token vacia'
        });
    };

    //  (2.2) Divide la cadena en partes usando el (.) punto como referencia

    const tokenParts = token.split('.');
    // console.log('Token Parts: ', tokenParts)

    // (2.3) Verificar que la caena tenga tres partes separadas por puntos (formato base de un token)
    if( tokenParts.length !== 3) {
        res.json({
            msg: 'Formato del token no es valido'
        })
    }

    //(2.4) Verificar la autentizidad del token (si fue generada)
    const payload = validateToken(token);

    if(! payload) {
        res.json({
            msg: 'Token invalido o inactivo'
        });
    }

    console.log( 'payload (middleware): ', payload );

    // Paso 3: verificar estado del usuario (si el usuario fue eliminado el token ya no es valido y debe decir inactivo)
    const userFound = await dbGetUserByEmail( payload.email );

    if(! userFound) {
        res.json({
            msg: 'El usuario esta deshabilitado o ya no se encuentra registrado en el sistema'
        });
    }

    req.holaatodos = 'Hola terricolas despierten'

    console.log( 'userFound', userFound );

    // 4. Generar un nuevo token (debe tener las mismas propiedades del payload original)
    //const newPayload =  {
    //    _id: userFound._id,
    //    name: userFound.name,
    //    email: userFound.email,
    //    role: userFound.role,
    //    status: userFound.status
    //}

    //const token = generateToken (newPayload);
    

    next();

}


export {
    authMiddleware
}