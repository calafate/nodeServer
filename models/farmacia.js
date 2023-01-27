const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
    razonSocial:{
        type: String,
        required: true,
    },
    nombreFantasia:{
        type: String,
    },
    cuit:{
        type: Number,
        required: true,
    },
    direccion:{
        type: String,
    },
    telefono:{
        type: String,
    },
    mail:{
        type: String,
    },
    codigoPagoElectronico:{
        type: Number,
    },
    farmaciaActiva:{
        type: Boolean
    } 
})

const Farmacia = mongoose.model("Farmacia", schema)
module.exports = { Farmacia }