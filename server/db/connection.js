//Sets up our database connection. 
const knex = require('knex')
const config = require('../../knexfile').development
const connection = knex(config)


module.exports = connection