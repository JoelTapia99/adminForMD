const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/filtrado', function(req, res){
    controller.getCuponesPorCodigo(
        req.query.id,
        req.query.codigo
    )
    .then(cuponesLista =>{
        res.send(cuponesLista);
    })
    .catch(e =>{
        console.error('[CuponesNetwork] No se obtuvo la lista de cupones');
        console.error(e);
    });
});

router.get('/:local', function(req, res){
    controller.getCupones(
        req.params.local
    )
    .then(cuponesLista =>{
        res.send(cuponesLista);
    })
    .catch(e =>{
        console.error('[CuponesNetwork] No se obtuvo la lista de cupones');
        console.error(e);
    });
});

router.put('/:id', function(req, res){
    controller.reclaimCupones(
        req.params.id,
        req.body.fecha
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