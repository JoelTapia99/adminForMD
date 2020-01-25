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
        console.error('Ha ocurrido un Error!');
        console.error(e);
    });
});

router.delete('/:id', function(req, res){
    controller.deletePremios(
        req.params.id
    )
    .then(premio => {
        console.log(premio);
        res.send(premio)
    })
    .catch(e => {
        console.error('Ha ocurrido un Error!');
        console.error(e);
    });
});

router.get('/:id', function(req, res){
    controller.getOne(
        req.params.id
    )
    .then(premio =>{
        res.send(premio);
    })
    .catch(e =>{
        console.error('[Premios-Network] No se obtuvo el premio');
        console.error(e);
    });
});

router.patch('/:id', function(req, res){
    controller.recoverPremios(
        req.params.id
    )
    .then(premio => {
        console.log(premio);
        res.send(premio)
    })
    .catch(e => {
        console.error('Ha ocurrido un Error!');
        console.error(e);
    });
});

module.exports = router;