const knex = require('../../db');

function getPremios(){
    return knex.select().from('premios');
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

module.exports = {
    premios: getPremios,
    add: addPremios
}