const knex = require('../../db');

function getCupones(){
    return knex('cupones').select();
}

function reclaimCupones(id){
    knex('cupones').where('id_cupon', id).update({cupon_canjeado: true})
    .then(() => {
        console.log('Cupón canjeado con éxito');
    })
    .catch(e => {
        console.error('No se pudo canjear el cupón');
        console.error(e);
    });
}

module.exports = {
    all: getCupones,
    reclaim: reclaimCupones
}