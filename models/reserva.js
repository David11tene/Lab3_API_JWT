const mongoose = require('mongoose');

//Definir el esquema para las reservas
const reservaSchema = new mongoose.Schema({
    usuario:{ type: mongoose.Schema.Types.ObjectId, ref:'Usuario'},
    fecha: String,
    sala: String, //A, B, C...
    hora: String 
});

module.exports = mongoose.model('Reserva', reservaSchema)