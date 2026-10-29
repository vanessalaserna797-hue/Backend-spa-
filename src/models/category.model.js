import {Schema, model} from 'mongoose';

//Definir la estructura de mi documento
const categorySchema = new Schema(
    //Definir la estructura de datos 
{
    nombre: {
        type: String,
        unique: [true, 'El nombre de el producto es unico'],       //Regla
        minlength: 5
    },
    descripcion: String,
    status: {
        type: Boolean,
        default: true 
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'cita',
        default: null
    }
}, 
    //Configuraciones de la estructura de datos 
{
    timestamps: true, //Agregar los campos creatAt automaticamente 
    versionKey: false //Elimina la propedad de versionamiento _V del schema 
});

//Definir el model a partir de la estructura del documento 
const categoryModel = model(
    'category', //Nombre de la colleccion donde se guardara los documentos de tipo categoria
    categorySchema //Schema (estructura de datos)
);

//Exportar el modelo para que pueda ser usado 
export default categoryModel;