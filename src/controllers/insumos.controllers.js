import { dbCreateInsumos } from '../services/insumos.services.js';

const createInsumos = async (req , res) =>{
    try {
        const inputData = req.body;

        const data = await dbCreateInsumos(inputData);

        res.json({msg:'Registrar insumo', data: data});
    } catch (error) {
        console.error(error);
        res.json({msg:'No se pudo registrar el insumo'});
    }
}
//http//localhost:3000/api/insumos -->{}
    //http//localhost:3000/api/insumos?status -->{status}
const GetInsumos = async (req, res) => {
     const availableStatus = ['disponible','agotado','sin insumo'];

     let filter = {};

     if (query && availableStatus.includes(query.status)){}

     
    try {
        console.log(req.query);
        const query = req.query; 

        const data = await dbGetInsumos(query);

        res.json({msg:'Lista total o parcialmente de los productos', data: data});

    } catch (error) {
        console.error(error);

        res.json({
            msg:'No se pueden listar total o parcialmente los productos'
        });
    }
}

export {
    createInsumos,
    GetInsumos,
}