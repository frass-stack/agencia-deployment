import {Viaje} from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js'

const paginaInicio = async (req, res) => {// '/' es la direccion que visito; 'req' es lo que envio y 'res' es lo que express responde

    //consultamos la DB por 3 viajes, para mostrar en el inicio(vamos a realizar multiples consultas, por los viajes y los testimoniales)
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({ limit: 3 }))
    promiseDB.push(Testimonial.findAll({ limit: 3 }))

    //const viajes = await Viaje.findAll({ limit: 3 });

    try {
        const resultado = await Promise.all( promiseDB );

        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]

        });
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => {// '/' es la direccion que visito; 'req' es lo que envio y 'res' es lo que express responde
    //render escanea y muestra las view
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {// '/' es la direccion que visito; 'req' es lo que envio y 'res' es lo que express responde
    
    //consultar DB
    const viajes = await Viaje.findAll();

    console.log(viajes);
    
    //mostrar en la view
    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    })
}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    
    const { slug } = req.params

    try {
        const viaje = await Viaje.findOne( {where : { slug }} )

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })

    } catch (error) {
        console.log(error);
    }
}

const paginatestimoniales = async (req, res) => {// '/' es la direccion que visito; 'req' es lo que envio y 'res' es lo que express responde
    
    const testimoniales = await Testimonial.findAll();

    try {
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginatestimoniales,
    paginaDetalleViaje
}