const store = require('./store');

function getCupones(local){
    return new Promise((resolve, reject) =>{
        resolve(store.all(local));
    });
}

function reclaimCupones(id, fecha){
    return new Promise((resolve, reject) => {
        if (!id){
            console.error('[CuponesController] No se pudo completar la operación');
            return reject('Datos Incorrectos');
        }
        store.reclaim(id, fecha);
        resolve({id_cupon: id});
    });
}

module.exports = {
    getCupones,
    reclaimCupones
}