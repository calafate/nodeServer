const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
    nombre:{
        type: String,
        required: true,
    },
    raza:{
        type: String,
    },
    desparasitado:{
        type: Boolean,
    },
    ultimaVacuna:{
        type: String,
    },
    edad:{
        type: Number,
    },
    peso:{
        type: Number,
    }
})

const Duxpet = mongoose.model("Duxpet", schema)
module.exports = { Duxpet }