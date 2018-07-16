const express = require('express')
const router = express.Router();
const usersDB = require('../db/users')


router.use(express.json())

router.get('/', (req, res) => {
    usersDB.getUsers() //knex deals in promises, thus we work with this async
        .then(users => {
            res.json(users)
        })
})

router.post('/', (req, res) => {
    const user = req.body
    //console.log("Trying to post ", user);
    usersDB.addUser(user)
        .then(dbOutput => {
            res.json(dbOutput)
        })
})


module.exports = router