const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', function(req, res){
    controller.getCupones()
    .then(cuponesLista =>{
        res.send(cuponesLista);
    })
    .catch(e =>{
        console.error('[CuponesNetwork] No se obtuvo la lista de cupones');
        console.error(e);
    });
});

router.delete('/:id', function(req, res){
    controller.reclaimCupones(
        req.params.id
    )
    .then(cupon => {
        console.log(cupon);
        res.send(cupon)
    })
    .catch(e => {
        console.error('[CuponesNetwork] Ha ocurrido un Error!');
        console.error(e);
    });
});

module.exports = router;