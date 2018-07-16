const express = require('express');
const server = express();
const path = require('path')

server.use(express.json())
//Getting public files
server.use(express.static(path.join(__dirname,'../public')))

//Project Specific Routes
const userRouter = require('./routes/users.js')
server.use('/api/users', userRouter)


server.get('/', (req, res)=> {
    res.send('hi boiz')
})

module.exports = server
