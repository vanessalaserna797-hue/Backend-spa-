import bcrypt from 'bcrypt';

const generatePassword = ( originalPassword ) => {
    //Generar un cadena aleatorea N veces
    const salt = bcrypt.genSaltSync(9);
    // Mezclado y encriptado 

    const hashPassword = bcrypt.hashSync ( originalPassword, salt);

    return hashPassword;

}

const verifyPassword = ( originalPassword , hashPassword ) => {
    return bcrypt.compareSync ( originalPassword, hashPassword);
}


export {
    generatePassword,
    verifyPassword
}