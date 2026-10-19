import {Schema, model} from 'mongoose' ;

//Definir el Schema 
const insumosSchema = new Schema({
    name: {
        type: String,
        minlengh: 5,
        required: true,
        unique: true
    },
    stock:{
        type: Number,
        min: 0,
        default: 1
    },
    state:{
        type: String,
        enum:['disponible','agotado','sin insumo'],
        default: 'disponible'
    },
    createdBy:{
        type: String,
        required: true
    }
},{
    timestamps: true, 
    versionKey: false
});

//Definir el modelo de datos
const insumosModel = model('insumos',insumosSchema);

export default insumosModel;