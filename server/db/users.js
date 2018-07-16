const conn = require('./connection')


function getUsers() {
  return conn('users') // = SELECT * FROM rats
}

function addUser(user) {
  return conn('users')
    .insert(user)
}

module.exports = {
  getUsers,
  addUser
}