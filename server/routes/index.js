const express = require('express');
const router = express.Router();



/* Controladores */
const viajesController = require('../controllers/viajesControllers')
const nosotrosController = require('../controllers/nosotrosController')
const homeController = require('../controllers/homeController')
const testimonialesController = require('../controllers/testimonialesController')


module.exports = function() {
    router.get('/', homeController.consultasHomepage);
    router.get('/nosotros', nosotrosController.infoNosotros);
    // Para crear una pagina copia y pega router.get y cambia los datos
    router.get('/viajes', viajesController.mostrarViajes);
    router.get('/viajes/:id', viajesController.mostrarViaje );
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales );
    // Cuando se llena el formulario
    router.post('/testimoniales',testimonialesController.agregarTestimonial )
    return router;
}