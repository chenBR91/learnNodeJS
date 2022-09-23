const { json } = require('express')
const express = require('express')
const app = express()
const { pepoles } = require('./2-express-tutorial/data.js')

app.get("/", (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/pepole">pepole list</a>')
})

app.get('/api/pepole', (req, res) => {
    const namePepole = pepoles.map((pepole) => {
        return pepole.name
    })
    res.json(namePepole)
})


app.get('/api/pepole/:productId', (req, res) => {
    const singlePepole = pepoles.find((pepole) => pepole.id === Number(req.params.productId))

    if(!singlePepole) {
        return res.status(404).send("not found")
    }
    return res.json(singlePepole)
})


app.get('/api/pepole/:productId/review/:reviewID', (req, res) => {
   console.log(req.params)
})


app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query
    let orderPepoles = [...pepoles]

    if(search) {
        orderPepoles = orderPepoles.filter(oderPepole => {
            return oderPepole.id === Number(search)
        })
        console.log(orderPepoles)
    }

    if(limit) {
        orderPepoles = orderPepoles.slice(0, Number(limit))
        console.log(orderPepoles)
    }

    res.send(orderPepoles)
 })




app.listen(5000, () => {
    console.log("server is listening on port 5000")
})

