const premios = require('../components/premios/network');
const cupones = require('../components/cupones/network');
const imagenes = require('../components/imagenes/network');
const administradores = require('../components/administradores/network');

const routes = function(server){
    server.use('/premios', premios);
    server.use('/cupones', cupones);
    server.use('/imagenes', imagenes);
    server.use('/administradores', administradores);
}

module.exports = routes;