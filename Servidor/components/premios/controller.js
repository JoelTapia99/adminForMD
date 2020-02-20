const store = require('./store');

function getPremios(local, bool){
    return new Promise((resolve, reject) =>{
        resolve(store.all(local, bool));
    });
}

function addPremios(nombre, descripcion, costo, imagen , local){
    return new Promise((resolve, reject) => {
        if(!nombre || !descripcion || !costo || !imagen || !local){
            console.error('[PremiosController] No se pudo completar la operación');
            return reject('Datos Incorrectos');
        }
        const premio = {
            nombre_premio: nombre,
            descripcion_premio: descripcion,
            costo_premio: costo,
            id_imagen: imagen,
            id_local: local
        }
        store.add(premio);
        resolve(premio);
    });
}

function editPremios(id, nombre, descripcion, costo, imagen){
    return new Promise((resolve, reject) => {
        if(!id || !nombre || !descripcion || !costo || !imagen){
            console.error('[PremiosController] No se pudo completar la operación');
            return reject('Datos Incorrectos');
        }
        const premio = {
            nombre_premio: nombre,
            descripcion_premio: descripcion,
            costo_premio: costo,
            id_imagen: imagen,
        }
        store.edit(id, premio);
        resolve(premio);
    });
}

function deletePremios(id){
    return new Promise((resolve, reject) => {
        if (!id){
            console.error('[PremiosController] No se pudo completar la operación');
            return reject('Datos Incorrectos');
        }
        store.del(id);
        resolve({id_premio: id});
    });
}

function getOnePremio(id){
    return new Promise((resolve, reject) => {
        if (!id){
            console.error('[PremiosController] No se pudo completar la operación');
            return reject('Datos Incorrectos');
        }
        resolve(store.one(id));
    });
}

function recoverPremios(id){
    return new Promise((resolve, reject) => {
        if (!id){
            console.error('[PremiosController] No se pudo completar la operación');
            return reject('Datos Incorrectos');
        }
        store.recover(id);
        resolve({id_premio: id});
    });
}

module.exports = {
    getPremios,
    addPremios,
    editPremios,
    deletePremios,
    getOnePremio,
    recoverPremios
}