const store = require('./store');

function getImagenes(){
    return new Promise((resolve, reject) => {
        resolve(store.all());
    });
}

module.exports = {
    getImagenes
}