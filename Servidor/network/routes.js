const premios = require('../components/premios/network');

const routes = function(server){
    server.use('/premios', premios);
}

module.exports = routes;