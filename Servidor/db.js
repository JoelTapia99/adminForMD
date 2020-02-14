const config = require('./config');

var knex = require('knex')({
    client: 'pg',
    connection: {
      host : config.db.host,
      user : config.db.user,
      password : config.db.password[1],
      database : config.db.database[1]
    }
});

module.exports = knex;