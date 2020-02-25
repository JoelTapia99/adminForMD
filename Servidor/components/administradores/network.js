const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', function(req, res){
    controller.getAdministradores()
    .then(administradoresLista =>{
        res.send(administradoresLista);
    })
    .catch(e =>{
        console.error('[AdministradoresNetwork] No se obtuvo la lista de administradores');
        console.error(e);
    });
});

router.get('/:id', function(req, res){
    controller.getOneAdministrador(
        req.params.id
    )
    .then(administrador =>{
        res.send(administrador);
    })
    .catch(e =>{
        console.error('[AdministradoresNetwork] No se obtuvo al Administrador');
        console.error(e);
    });
});

router.post('/login', function(req, res){
    controller.loginAdministrador(
        req.body.email,
        req.body.password
    )
    .then(administrador => {
        res.send(administrador);
    })
    .catch(e =>{
        console.error('[AdministradoresNetwork] No se obtuvo al Administrador');
        console.error(e);
    });
});

router.post('/', function(req, res){
    res.send('Deslogueado!');
});

module.exports = router;