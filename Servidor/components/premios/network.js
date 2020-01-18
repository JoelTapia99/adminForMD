const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', function(req, res){
    controller.getPremios()
    .then(premiosLista =>{
        res.send(premiosLista);
    })
    .catch(e =>{
        console.error('[Premios-Network] No se obtuvo la lista de premios');
        console.error(e);
    });
});

module.exports = router;