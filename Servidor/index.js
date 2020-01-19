const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const config = require('./config');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(config.port);
router(app);

console.log(`La aplicación esta esuchando en http://localhost:${config.port}`);
