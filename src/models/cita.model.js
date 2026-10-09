import {Schema, model} from "mongoose";

//parte 1 : Definir la estructura de datos de mi Documento 

const citaSchema = new Schema({
    name: {
        type: String,               //tipo de dato
        require: true,              //Regla: es Obligatorio
        trim: true                  //Modificador 
    },
    email: {
        type: String,
        require: true,
        trim: true 
    },
    password: {
        type: String,
        trim: true,
        require: true
    },
    createDate:{
        type: Date,
        default: Date.now()
    },
    updatedDate:{
        type: Date,
        default: Date.now()
    },
}, {
    timestamps: true            //crea automaticamente CreatedAt, updatedAt
});

//parte 2 : Definir el modelo. Dicho modelo esta atado al nombre de documento
const citaModel = model();

export default citaModel;