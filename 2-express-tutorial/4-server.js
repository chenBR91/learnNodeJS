const express = require('express');
const app = express();
const logger = require('./2-express-tutorial/logs/logger');
const authorize = require('./2-express-tutorial/authorize.js')

app.use([authorize ,logger])

app.get("/", (req, res) => {
    res.send(`<h1>home</h1>`)
})


app.get("/about", (req, res) => {
    res.send('About')
})


app.get("/info", (req, res) => {
    console.log('info')
    res.send('Info')
})


app.get("api/product", (req, res) => {
    res.send('Product')
})



app.listen(5000, () => {
    console.log("server is listening on port 5000")
})

