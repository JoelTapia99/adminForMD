const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const config = require('./config');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(config.port);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', config.origin);
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

router(app);

console.log(`La aplicación esta esuchando en http://localhost:${config.port}`);
