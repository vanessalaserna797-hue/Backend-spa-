const listarCita = (rq, res) => {
    res.send('Listar todas las citas del dia')
};

export{
    listarCita
}

const registrarCita = (req, res) => {
    res.send('Regitrar Cita')
};

export {
    registrarCita
}

const ActualizarCita = (req, res) => {
    res.send('Actualizar todas las propiedades de una cita')
};

export {
    ActualizarCita
}

const ActualizarunaomasCitas = (req, res) => {
    res.send('Actualizar una o mas propiedades de las citas')
};

export{
    ActualizarunaomasCitas
}

const EliminarCita = (req, res) => {
    res.send('Eliminar Cita')
}

export{
    EliminarCita
}