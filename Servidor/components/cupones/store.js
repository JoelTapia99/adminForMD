const knex = require('../../db');

function getCupones(local){
    return knex.from('cupones')
        .innerJoin('premios', 'cupones.id_premio', '=', 'premios.id_premio')
        .innerJoin('usuarios', 'cupones.id_usuario', 'usuarios.id_usuario')
        .where({id_local: local, cupon_canjeado: false})
        .select('id_cupon', 'codigo_cupon', 'fecha_generacion_cupon', 'nombre_premio',
            'descripcion_premio', 'imagen_premio', 'nombre_usuario')
        .orderBy('id_cupon');
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