const http = require('http')

const server = http.createServer((req, res) => {
    console.log('server')
    res.end('Welcome to app')
})

server.listen('5001', () => {
    console.log('Server is listening port 5001..');
})

/*print:
    Server is listening port 5001..
    server
*/