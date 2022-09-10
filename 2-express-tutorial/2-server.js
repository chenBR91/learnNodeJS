const express = require('express')
const path = require('path')

const app = express()


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"))
})

app.get("/about", (req, res) => {
    res.status(200).send("About page")
})

app.all("*", (req, res) => {
    res.status(404).send('Not found 404')
})

app.listen(5000, () => {
    console.log("server is listening on port 5000")
})

