const express = require('express');
const server = express();

server.use(express.json())

const userRouter = require('./routes/users.js')

server.use('/api/users', userRouter)

server.get('/', (req, res)=> {
    res.send('hi boiz')
})

module.exports = server