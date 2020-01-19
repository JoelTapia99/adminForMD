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

router.post('/', function(req, res){
    controller.addPremios(
        req.body.nombre,
        req.body.descripcion,
        req.body.costo,
        //req.body.imagen,
        req.body.local
    )
    .then(premio =>{
        console.log(premio);
        res.send(premio)
    })
    .catch(e => {
        console.error('Ha ocurrido un Error!');
        console.error(e);
    });
});

module.exports = router;