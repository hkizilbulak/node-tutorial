const http = require('http')

const server = http.createServer((req, res) => {

    if(req.url === '/') {
        res.end('Welcome to home page')
    }

    if(req.url === '/about') {
        //BLOCKING CODE
        //response time takes a little longer. After for loop, res will printed on screen
        console.time()
        for(let i=0;i<1000;i++){
            for(let j=0; j<1000;j++) {
                console.log(`${i} ${j}`)
            }
        }
        console.timeEnd()
        res.end('Welcome to about page')
    }
})

server.listen(5001, () => {
    console.log('Server is listening port 5001')
})