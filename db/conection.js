const environment = require('../services/temporalEnv')
const mongoose = require('mongoose')
const DB_URI = environment.DB_URI
const dbConnect = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log('DB connected')
    } catch (error) {
        console.log('Error en la conexion en la base de datos', error)
        throw 'Error en la conexion en la base de datos'
    }
}

module.exports = dbConnect;