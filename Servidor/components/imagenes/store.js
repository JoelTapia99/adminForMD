const knex = require('../../db');

function getImagenes(){
    return knex('imagenes').select();
}

module.exports = {
    all: getImagenes
}