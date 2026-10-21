import {dbCreateCategory, dbGetCategories, dbDeleteCategory, dbUpdateCategory, dbGetCategory} from  "../services/categories.services.js";


const createCategory = async (req, res) => {

    try {
        //Extraer los datos del cuerpo de la peticion
        const inputData = req.body;

        //Usar el servicio para registrar 
        const data = await dbCreateCategory(inputData);

        res.json({msg: 'Registra categoria', data: data});
        
    } catch (error) {
        console.error(error);

        res.json({msg: 'No se pudo registrar la categoria'});
    }
} 
const getCategories = async (req, res) => {
    try {
         const data =  await dbGetCategories ();

   res.json({
        msg: 'Lista de categorias',
        data: data
   });
    } catch (error) {
        console.error(error);

        res.json({
            msg:'No se ha podido obtener las categorias activas'
        })
        
    }
  
}

const deleteCategory = async  (req, res) => {
    const id = req.params.id;

    const data = await dbDeleteCategory(id)
    res.json({ 
        msg: 'Elimina una categoria',
        data: data  
    });
}

const updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const inputData = req.body;

        const data = await dbUpdateCategory( id, inputData);

        res.json({ 
            msg: 'Categoria Actualizada',
            data: data 
        });
    } catch (error) {
        console.error(error);

        res.json({
            msg: 'no se ha pordido eliminar la categoria'
        });

        if (error.code == 1100){
                    const field = Object.keys(error.keyValue)[0]; 

                    return res.json({
                        msg: `Error por complicidad en el campo'${field}'`, 
                        [field]: `El campo'${field}' con el valor '${error.keyValue[field]}', ya se encuentra regitrado `
                    });
                }
        
    }
   
}

const getCategory = async (req,res) => {
    try {
        const id = req.params.id;

        const data = await dbGetCategory(id)

        res.json({
            msg: 'Obtiene una categoria',
            data: data
        });
    } catch (error) {
        console.error(error);

        res.json({
            msg:'No se pudo obtener categoria ID'
        });
        
    }
}


export {
    createCategory,
    getCategories,
    deleteCategory,
    updateCategory, 
    getCategory
}