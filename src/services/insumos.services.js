import insumosModel from"../models/insumos.model.js"

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

export {
    dbCreateInsumos,
    dbGetInsumos,
}