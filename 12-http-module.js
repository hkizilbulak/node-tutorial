const http = require('http')

/*const server = http.createServer((req, res)=> {
    res.write('Hello World')
    res.end()
})*/

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to homepage')
    }

    if(req.url === '/about') {
        res.end('Welcome to about page')
    }

    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find page you are looking for</p>
    <a href='/'>Back to home</a>`)
})

server.listen(5001)