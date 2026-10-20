import categoryModel from "../models/category.model.js"


const dbCreateCategory = async (newCategory) => {
   return await categoryModel.create(newCategory); //Registrar en la DB
}

const dbGetCategories = async () => {

    return await categoryModel.find({status: true }).populate('createdBy');       //Consultar todas las categorias registradas 
}

const dbDeleteCategory = async ( id ) => {
    //return await categoryModel.findByIdAndDelete( id );
    return await categoryModel.findOneAndDelete({_id: id});
}
   
const dbUpdateCategory = async (id, categoryUpdated) => {
    //return await categoryModel.findByIdAndUpdate( 
        //id,             //Elemete del documento que queremos actualizar 
        //categoryUpdated ,    //el objeto con los datos del documento que desamos actualizar
       // {new: true}           //Configuracion para que retorne el documento actualizado 
   // );
   return await categoryModel.findOneAndUpdate(
    {_id: id },  //Elemete del documento que queremos actualizar
    categoryUpdated, //categoryUpdated ,    //el objeto con los datos del documento que desamos actualizar
    {new: true}    //Configuracion para que retorne el documento actualizado 
   );
}

const dbGetCategory = async (id) => {
    return await categoryModel.findById(id);         //Obtiene una categoria por su ID
}


export {
    dbCreateCategory,
    dbGetCategories,
    dbDeleteCategory,
    dbUpdateCategory,
    dbGetCategory
}