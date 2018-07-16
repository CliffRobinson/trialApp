const server = require('./server')
const port = 3000
const beNice = require('../../terminal-sweetness')

server.listen(port, ()=> {
    console.log(`Listening on port ${port}, time is ${new Date}`)
    beNice();
})
