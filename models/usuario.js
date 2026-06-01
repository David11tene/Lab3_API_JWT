const mongoose = require('mongoose');

//Definir el esquema del usuario
const usuarioSchema = new mongoose.Schema({
    correo: String,
    contrasenia: String
});

//Exportar el modelo de usuario
module.exports = mongoose.model('Usuario', usuarioSchema)