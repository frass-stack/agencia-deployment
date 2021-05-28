import Sequelize from 'sequelize';
import db from '../config/db.js';

//Los datos que se van a mostrar, corresondientes a la tabla de 'viajes'
export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})