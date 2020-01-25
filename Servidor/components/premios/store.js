const knex = require('../../db');

function getPremios(){
    return knex('premios').select();
}

function addPremios(premio){
    knex('premios').insert(premio)
    .then(() => {
        console.log('Premio agregado con éxito');
    })
    .catch(e => {
        console.error('No se pudo agregar el premio');
        console.error(e);
    });
}

function editPremios(id, premio){
    knex('premios').where('id_premio', id).update(premio)
    .then(() => {
        console.log('Premio editado con éxito');
    })
    .catch(e => {
        console.error('No se pudo editar el premio');
        console.error(e);
    });
}

function deletePremios(id){
    knex('premios').where('id_premio', id).update({premio_eliminado: true})
    .then(() => {
        console.log('Premio eliminado con éxito');
    })
    .catch(e => {
        console.error('No se pudo eliminar el premio');
        console.error(e);
    });
}

function getOnePremio(id){
    return knex('premios').where('id_premio', id).select();
}

function recoverPremios(id){
    knex('premios').where('id_premio', id).update({premio_eliminado: false})
    .then(() => {
        console.log('Premio recuperado con éxito');
    })
    .catch(e => {
        console.error('No se pudo recuperar el premio');
        console.error(e);
    });
}

module.exports = {
    all: getPremios,
    add: addPremios,
    edit: editPremios,
    del: deletePremios,
    one: getOnePremio,
    recover: recoverPremios
}