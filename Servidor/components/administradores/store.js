const knex = require('../../db');

function getAdministradores(){
    return knex('administradores').select();
}

function getOneAdministrador(id){
    return knex('administradores').where('id_administrador', id).select();
}

module.exports = {
    all: getAdministradores,
    one: getOneAdministrador
}