import {Schema, model} from 'mongoose';

//Definir la estructura de mi documento
const categorySchema = new Schema(
    //Definir la estructura de datos 
{
    nombre: {
        type: String,
        unique: true,
        minlength: 5
    },
    descripcion: String
}, 
    //Configuraciones de la estructura de datos 
{});

//Definir el model a partir de la estructura del documento 
const categoryModel = model(
    'category', //Nombre de la colleccion donde se guardara los documentos de tipo categoria
    categorySchema //Schema (estructura de datos)
);

//Exportar el modelo para que pueda ser usado 
export default categoryModel;