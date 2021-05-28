//importamos express y lo asignamos a una variable
//const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

//definimos el puerto
const app = express(); //ejecutamos express

//conectar a la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch(error => console.log(error))

const port = process.env.PORT || 4000; //process.env.PORT es una variable de entorno.
const host = process.env.HOST || '0.0.0.0';

//Hablitar PUG
app.set('view engine', 'pug');

//Definimos el año actual para el footer
app.use((req, res, next) => {
    //una variable de estilo fecha
    const year = new Date();
    //mando el año al footer
    res.locals.actualYear = year.getFullYear();
    //creo una variable para pasar en el index.pug para el titulo
    res.locals.nombreSitio = 'Agencia de Viajes';
    //paso al siguiente middleware
    return next();   
})

//agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

//Agregamos las rutas, donde '/' es la pagina inicio
app.use('/', router);

//Definimos la carpeta public
app.use(express.static('public'));

//arrancamos el servidor
app.listen(port, host, () => {
    console.log(`El servidor esta funcionando`)
})