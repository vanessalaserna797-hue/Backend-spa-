import {Schema, model} from "mongoose";

//parte 1 : Definir la estructura de datos de mi Documento 

const citaSchema = new Schema({
    fecha:{
        type: String,
        required: true,
    },
    horaInicio: {
        type: String,
        required: true
    },
    servicio:{
        type: String, //vamos a cambiar el tipo mas adelante 
        required: true
    },
    estado:{
        type: String,
        enum: ['Confirmada','Pendiente','Cancelada'],
        default: 'Confirmada'
    },
    duracion:{
        type: String 
    },
    usuario_id:{
        type: String, //vamos a cambiar el tipo mas adelante 
        required: true
    }
}, {
    timestamps: true            //crea automaticamente CreatedAt, updatedAt
});
   
//parte 2 : Definir el modelo. Dicho modelo esta atado al nombre de documento
const citaModel = model(
    'cita',         //Nombre de la coleccion
    citaSchema         //Nombre del esquema que define la estructura 
);

export default citaModel;