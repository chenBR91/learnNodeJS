const express = require('express');
const morgan = require('morgan')
const app = express();


// recived upload page time [msec]
app.use(morgan('tiny'))

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

