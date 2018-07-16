
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', table => {
    table.increments('user_id')
    table.string('name')
    table.string('email')
    table.string('img_url')
    table.string('quote')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
