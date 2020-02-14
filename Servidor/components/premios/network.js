const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/:local/:bool', function(req, res){
    controller.getPremios(
        req.params.local,
        req.params.bool
    )
    .then(premiosLista =>{
        res.send(premiosLista);
    })
    .catch(e =>{
        console.error('[PremiosNetwork] No se obtuvo la lista de premios');
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
        console.error('[PremiosNetwork] Ha ocurrido un Error!');
        console.error(e);
    });
});

router.put('/:id', function(req, res){
    controller.editPremios(
        req.params.id,
        req.body.nombre,
        req.body.descripcion,
        req.body.costo,
        //req.body.imagen,
        req.body.local
    )
    .then(premio => {
        console.log(premio);
        res.send(premio)
    })
    .catch(e => {
        console.error('[PremiosNetwork] Ha ocurrido un Error!');
        console.error(e);
    });
});

router.delete('/:id/:c', function(req, res){
    if (req.params.c == 'd'){
        controller.deletePremios(
            req.params.id
        )
        .then(premio => {
            console.log(premio);
            res.send(premio)
        })
        .catch(e => {
            console.error('[PremiosNetwork] Ha ocurrido un Error!');
            console.error(e);
        });
    } else if(req.params.c == 'r'){
        controller.recoverPremios(
            req.params.id
        )
        .then(premio => {
            console.log(premio);
            res.send(premio)
        })
        .catch(e => {
            console.error('[PremiosNetwork] Ha ocurrido un Error!');
            console.error(e);
        });
    } else {
        console.error('[PremiosNetwork] Condición Inválida!');
    }
    
});

router.get('/:id', function(req, res){
    controller.getOnePremio(
        req.params.id
    )
    .then(premio =>{
        res.send(premio);
    })
    .catch(e =>{
        console.error('[PremiosNetwork] No se obtuvo el premio');
        console.error(e);
    });
});

module.exports = router;