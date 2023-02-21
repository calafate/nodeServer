const mongoose = require("mongoose")
require("dotenv").config()

const connect = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Base CONECTADA")
    } catch {
        console.log("Problemas al conectarse con la Base de Datos")
    }
}

module.exports = {connect}