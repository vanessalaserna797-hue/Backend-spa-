const withoutRoleMiddleWare = (req, res , next) => {
    //Paso 1: Obtiene los datos de la peticion
    const inputData = req.body;

    //Paso 2: Elimina el rol para que se registre el rol por defecto

    delete inputData.role;   //Elimina la propiedad role

    //Paso 3: El middleware lanza el control
    next();

}

 export {
        withoutRoleMiddleWare
    }