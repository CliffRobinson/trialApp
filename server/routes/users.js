const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<h1> Greetings, user! </h1><h2>Also robots</h2>`)
})



module.exports = router