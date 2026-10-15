import categoryModel from "../models/category.model.js"
const dbCreateCategory = async (newCategory) => {
   return await categoryModel.create(newCategory); //Registrar en la DB
}

export {
    dbCreateCategory
}