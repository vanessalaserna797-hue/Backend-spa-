
//mongoose.connect('mongodb://127.0.0.1:27017/myapp')
//ODM
import mongoose from "mongoose";

    const URI_MONGO = process.env.URI_MONGO || "mongodb://localhost:27017" ;

    //sequelize (SQL) 
    //Prisma (SQL ,NOSQL)
const conexion = async () => {
    try {
        await mongoose.connect(URI_MONGO, {})
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.error ('Error en la base de datos')
    }

}

export default conexion;