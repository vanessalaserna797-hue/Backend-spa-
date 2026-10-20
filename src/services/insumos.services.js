import insumosModel from"../models/insumos.model.js"

const dbinsertarInsumos = async (newInsumo) => {
    return await insumosModel.create(newInsumo);
}

const dbCreateInsumos = async (newInsumo) => {
    return await insumosModel.create(newInsumo);
}

const dbGetInsumos = async (status) => {
    let filter = {};

    const availableStatus = ['disponible','agotado', 'sin insumo']

    if( option && availableStatus.includes( status ) ) {
        filter.status = option;
    }

    return await ProductModel.find( filter );
}
const dbDeleteInsumos = async (id) => {
    return await insumosModel.findOneAndDelete({_id: id});
}
const dbUpdateInsumos = async (id) => {
    return await insumosModel.findById(id);
}

export {
    dbinsertarInsumos,
    dbCreateInsumos,
    dbDeleteInsumos,
    dbUpdateInsumos,
    dbGetInsumos
}