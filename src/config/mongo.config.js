//mongoose.connect('mongodb://127.0.0.1:27017/myapp')
//ODM
import mongoose from "mongoose";

    const URL_ATLAS = 'mongodb+srv://Melany:1234@cluster0.h7ajufz.mongodb.net/'

    //sequelize (SQL) 
    //Prisma (SQL ,NOSQL)
const conexion = async () => {
    try {
        await mongoose.connect(URL_ATLAS, {})
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.error ('Error en la base de datos')
    }
    
}

export default conexion;