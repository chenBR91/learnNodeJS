const http = require('http');
const { readFileSync } = require('fs')


// get all files
const homePage = readFileSync('./index.html')


const server = http.createServer((req, res) => {
    // Home page
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(homePage)
        res.end()
    }
    // About page
    else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h3>About page</h3>')
        res.end()
    }
    // Not found 404
    else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write('<h3>Page not found</h3>')
        res.end()
    }
})


server.listen(5000)