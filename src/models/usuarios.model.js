import {Schema, model} from 'mongoose';

// Definir el schema
const UsuariosSchema = new Schema ({
    name: {
        type: String,         // Tipo de dato
        required: true,       // Regla: Es obligatorio
        trim: true            // Quita espacios al inicio y al final
    },
    email : {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        required: true

    },
    role: {
        type: String,
        enum: [ 'Admin', 'Employee', 'Costumer'],
        default: 'Customer'
    },
    status: {
        type: Boolean,
        default: true
    }
},
// Opciones del schema
{
    timestamps: true,   // Crea automaticamente createAt y updateAt
    versionKey: false,  // Quita el "_v:0"
})

// Definir el modelo de datos
const UsuariosModel = model( 'Usuario', UsuariosSchema );

// Exportar el Modelo para que este disponible

export default UsuariosModel