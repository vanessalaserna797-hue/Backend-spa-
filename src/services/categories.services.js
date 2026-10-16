import categoryModel from "../models/category.model.js"


const dbCreateCategory = async (newCategory) => {
   return await categoryModel.create(newCategory); //Registrar en la DB
}

const dbGetCategories = async () => {

    return await categoryModel.find({status: true });       //Consultar todas las categorias registradas 
}

const dbDeleteCategory = async ( id ) => {
    //return await categoryModel.findByIdAndDelete( id );
    return await categoryModel.findOneAndDelete({_id: id});
}
   

export {
    dbCreateCategory,
    dbGetCategories,
    dbDeleteCategory
}