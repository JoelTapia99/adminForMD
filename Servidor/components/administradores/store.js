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

function loginAdministrador(email, password){
    return knex('administradores')
        .where({nombre_admin: email, contraseña_admin: password})
        .select('id_administrador', 'nombre_administrador', 'id_local');
}

module.exports = {
    all: getAdministradores,
    one: getOneAdministrador,
    login: loginAdministrador
}