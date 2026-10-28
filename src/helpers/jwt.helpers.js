import jwt from 'jsonwebtoken'

const generateToken = (payload) => {
    try {
         return jwt.sign (
        payload, 
        process.env.JWT_SECRET,
        { expiresIn: '1d'});
        
    } catch (error) {
        console.error(error);

        return null;
    }
   
}

const validateToken = (token) => {
    try {
        const payload = jwt.verify( 
        token,                    // Token valido enviado por el usuario
        process.env.JWT_SECRET    // Cadena Secreta que se mezclo con el pay
    );

    console.log( 'payload: ', payload);  //debbuging

    return payload;

    } catch (error) {
        console.error(error);

        return null;
    }
   

}


export {generateToken, validateToken}