const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url === '/') {
        res.end('Hello welcome to our home page')
    }
    else if(req.url === '/about') {
        res.end('about page')
    }
    //res.write('Hello welcome to our home page')

})

server.listen(5000)

