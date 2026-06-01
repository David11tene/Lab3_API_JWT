const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

//Enrutamiento
app.use('/api/auth', authRoutes);

//Conexion a MongoDB y levantamiento del servidor
const PORT = process.env.PORT || 3000;

if (!process.env.MONGO_URI) {
    console.error('MONGO_URI no está definido en el archivo .env');
    process.exit(1);
}

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('MongoDB conectado')
    app.listen(PORT,()=>console.log(`Servidor ejecutándose en el puerto ${PORT}`));

})
.catch(err => {
    console.error('Error conectando a MongoDB:', err);
    process.exit(1);
});