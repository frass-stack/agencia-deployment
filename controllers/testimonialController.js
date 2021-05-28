import { Testimonial } from '../models/Testimoniales.js';

const guardarTestimonial = async (req, res) => {
    //validar formulario...
    const { nombre, correo, mensaje } = req.body

    const errores = [];
    
    //'trim()' quita los espacios en blanco al principio o final. Por cada campo vacio el array agrega un mensaje
    if(nombre.trim() === ''){
        errores.push({ mensaje : 'El nombre esta vacio'})
    }

    if(correo.trim() === ''){
        errores.push({ mensaje : 'El correo esta vacio'})
    }

    if(mensaje.trim() === ''){
        errores.push({ mensaje : 'El mensaje esta vacio'})
    }

    if(errores.length > 0){
        //consultar testimoniales
        const testimoniales = await Testimonial.findAll();
        //mostrar la vista con errores
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales,
        })
    } else {
        //Almacenar en la BD
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            //luego de agregar un testimonio, redirige a la misma pagina del form.
            res.redirect('/testimoniales');

        } catch (error) {
            console.log(error);
        }
    }
  
};

export {
    guardarTestimonial
};