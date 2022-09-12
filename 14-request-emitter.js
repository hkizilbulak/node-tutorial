const http = require('http')

/*const server = http.createServer((req, res) => {
    res.end('Welcome to home page')
})*/

/*using event emitter */
const server = http.createServer()
server.on('request', (req, res) => {
    res.end('Welcome to home page')
})

server.listen(5001, () => {
    console.log('Server is listening port 5001');
})