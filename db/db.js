const mongoose = require("mongoose")
require("dotenv").config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log("BD CONECTADA")
    } catch {
        console.log("Problemas al conectar la BD")
    }
}

module.exports = {connect}