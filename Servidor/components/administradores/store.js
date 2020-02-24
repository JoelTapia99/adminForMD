const knex = require('../../db');

function getAdministradores(){
    return knex('administradores').select();
}

function getOneAdministrador(id){
    return knex.from('administradores')
        .innerJoin('locales', 'administradores.id_local', '=', 'locales.id_local')
        .innerJoin('paises', 'locales.id_pais', '=', 'paises.id_pais')
        .where('id_administrador', id)
        .select();
}

module.exports = {
    all: getAdministradores,
    one: getOneAdministrador
}