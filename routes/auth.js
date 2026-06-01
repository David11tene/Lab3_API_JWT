//Importar las dependencias necesarias
const express = require('express');
//Importar el modelo de usuario
const Usuario = require('../models/usuario');
//Importar bcrypt para encriptar contraseñas y jwt para generar tokens
const bcrypt = require('bcryptjs');
//Importar jsonwebtoken para generar tokens
const jwt = require('jsonwebtoken');

//Crear el ruteo con express
const router = express.Router();

//Registro de usuario
router.post('/register', async (req, res) => {
    //Obtener el correo y la contraseña del cuerpo de la solicitud
    const { correo, contrasenia } = req.body || {};
    //Encriptar la contraseña
    const hashed = await bcrypt.hash(contrasenia, 10);
    
    //Crear una instancia del modelo de usuario con los datos proporcionados
    const nuevo = new Usuario({ correo, contrasenia: hashed });
    //Guardar el nuevo usuario en la base de datos
    await nuevo.save();

    res.status(201).json({ message: 'Usuario creado' });
});

module.exports = router;