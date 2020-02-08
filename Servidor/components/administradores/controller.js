const store = require('./store');

function getAdministradores(){
    return new Promise((resolve, reject) =>{
        resolve(store.all());
    });
}

function getOneAdministrador(id){
    return new Promise((resolve, reject) => {
        if (!id){
            console.error('[AdministradoresController] No se pudo completar la operación');
            return reject('Datos Incorrectos');
        }
        resolve(store.one(id));
    });
}

module.exports = {
    getAdministradores,
    getOneAdministrador
}