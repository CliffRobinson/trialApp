const conn = require('./connection')


function getUsers() {
  return conn('users') // = SELECT * FROM rats
}




module.exports = {
  getUsers,

}