import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginatestimoniales, paginaDetalleViaje } from '../controllers/paginaController.js'

//solo podemos tener una unica instancia de 'app', de esta forma continuo usando la misma instancia de express, pero extendida por su Router
const router = express.Router();

import {
    guardarTestimonial
} from '../controllers/testimonialController.js';

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros)

router.get('/viajes', paginaViajes)
router.get('/viajes/:slug', paginaDetalleViaje)

router.get('/testimoniales', paginatestimoniales)
router.post('/testimoniales', guardarTestimonial)

export default router;