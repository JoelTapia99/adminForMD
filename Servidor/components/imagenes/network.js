const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', function(req, res){
    controller.getImagenes()
    .then(imagenesLista => {
        res.send(imagenesLista);
    })
    .catch(e => {
        console.error('[ImagenesNetwork] No se obtuvo la lista de imágenes');
        console.error(e);
    })
});

module.exports = router;