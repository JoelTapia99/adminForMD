const store = require('./store');

function getPremios(){
    return new Promise((resolve, reject) =>{
        resolve(store.premios());
    });
}

function addPremios(nombre, descripcion, costo /* , imagen */, local){
    return new Promise((resolve, reject) => {
        if(!nombre || !descripcion || !costo /* || !imagen */ || !local){
            console.error('[PremiosController] No se pudo completar la operación');
            return reject('Datos Incorrectos');
        }
        const premio = {
            nombre_premio: nombre,
            descripcion_premio: descripcion,
            costo_premio: costo,
            //imagen_premio: imagen,
            id_local: local
        }
        store.add(premio)
        resolve(premio);
    });
}

module.exports = {
    getPremios,
    addPremios
}