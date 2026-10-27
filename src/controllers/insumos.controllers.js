import { dbCreateInsumos, dbGetInsumos, dbinsertarInsumos, dbUpdateInsumos} from '../services/insumos.services.js';

    const listarInsumos = async (req, res) => {
        try {
            const insumo = req.body;
            const newInsumo = await dbinsertarInsumos(insumo);
            const dbinsertarInsumos = (newInsumo);
        } catch (error) {
            console.error(error);
            res.json({
                msg:'Error al Listar insumos'
            })
        }
    };

    const createInsumos = async (req , res) => {
            try {
                const data = await dbCreateInsumos(inputData);

                      
            } catch (error) {
                console.error(error);   

                if (error.code == 11000){
                    const field = Object.keys(error.keyValue)[0]; 
                    return res.json({msg: `Error por complicidad en el campo'${field}'`, 
                    [field]: `El campo'${field}' con el valor '${error.keyValue[field]}', ya se encuentra regitrado `});
                }

                if(error.name == 'CatError') {
                    return res.status(400).json({
                    msg: 'Error en el formato ID',
                    [error.path]: `El identificador ${error.value} no tiene el formato ID `});
                }
               
                    res.json({msg:'No se pudo registrar el insumo'});
                    res.status(200).json({msg:'Registrar insumo', data: data});
            
                }
        }

               
    //http//localhost:3000/api/insumos -->{}
    //http//localhost:3000/api/insumos?status -->{status}
    const GetInsumos = async (req, res) => {
            try {
                console.log(req.query);
                const query = req.query; 

                const data = await dbGetInsumos(query);

                res.status(200).json({msg:'Lista total o parcialmente de los productos', data: data});

            } catch (error) {
                console.error(error);

                res.json({
                    msg:'No se pueden listar total o parcialmente los productos'
                });

            }
    }
const deleteInsumos = async (req, res) => {
    return await res.status(200).json({
        msg:'Eliminar un insumo', data: data
    });
}
const updateInsumos = async(req, res) => {
    try {
        const id = req.params.id;
        const inputData  = req.body;


        const data = await dbUpdateInsumos(id, inputData);

        res.json({
            msg: 'Insumo Actualizado',
            data: data 
        });
    } catch (error) {
        console.error(error);

        res.status(400).json({
            msg: 'no se pudo eliminar el insumo'
        });
        
         if(error.name == 'CatError') {
            return res.status(400).json({
                msg: 'Error en el formato ID',
                [error.path]: `El identificador ${error.value} no tiene el formato ID `
            });
        }
    }
}

const getInsumo = async (req, res) =>{
    try {
        const id = req.params.id;
        
        const data = await dbUpdateInsumos(id)

        res.status(400).json({
            msg:'Agrega un insumo',
            data: data
        });
    } catch (error) {
        console.error(error);

        res.statis(500).json({
            msg:'No se pudo registrar el insumo '
        });
        
        if(error.name == 'CatError') {
            return res.status(400).json({
                msg: 'Error en el formato ID',
                [error.path]: `El identificador ${error.value} no tiene el formato ID `
            });
        }
    }
}

export {
    listarInsumos,
    createInsumos,
    GetInsumos,
    deleteInsumos,
    updateInsumos,
    getInsumo
}