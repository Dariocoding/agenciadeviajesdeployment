const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req,res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    })
}

exports.agregarTestimonial = async (req, res) => {
    // Validar que todos los campos que estén llenos
    let {nombre,correo, mensaje} = req.body;

    let errores = [];
    if(!nombre) {
        errores.push({'mensaje' : 'Agrega tu nombre'})
    }
    if(!correo) {
        errores.push({'mensaje' : 'Agrega tu Correo'})
    }
    if(!mensaje) {
        errores.push({'mensaje' : 'Agrega tu Mensaje'})
    }

    // Revisar por correo
    if(errores.length > 0) {
        //Muesta la vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimoniales',
            testimoniales
        })
        
    } else {
        // Almacenarlo en la BD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        }).then(Testimonial => res.redirect('/testimoniales'))
          .catch(error => console.log(error));
    }
    
    
}