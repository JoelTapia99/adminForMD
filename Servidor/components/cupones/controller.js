const store = require('./store');

function getCupones(){
    return new Promise((resolve, reject) =>{
        resolve(store.all());
    });
}

function reclaimCupones(id){
    return new Promise((resolve, reject) => {
        if (!id){
            console.error('[CuponesController] No se pudo completar la operación');
            return reject('Datos Incorrectos');
        }
        store.reclaim(id);
        resolve({id_cupon: id});
    });
}

module.exports = {
    getCupones,
    reclaimCupones
}