const store = require('./store');

function getPremios(){
    return new Promise((resolve, reject) =>{
        resolve(store.premios());
    });
}

module.exports = {
    getPremios
}