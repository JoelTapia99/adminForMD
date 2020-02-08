const config = require('./config');

var knex = require('knex')({
    client: 'pg',
    connection: {
      host : config.db.host,
      user : config.db.user,
      password : config.db.password,
      database : config.db.database
    }
});

module.exports = knex;