import {Schema, SchemaType, model} from 'mongoose' ;

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
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: 'cita',
        default: null
    }
},{
    timestamps: true, 
    versionKey: false
});

//Definir el modelo de datos
const insumosModel = model('insumos',insumosSchema);

export default insumosModel;