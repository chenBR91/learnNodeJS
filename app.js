const express = require('express');
const { get } = require('lodash');
const { writeFileSync } = require('fs')
const path = require('path')
let { pepoles } = require('./2-express-tutorial/data')
const app = express();

// static assets
app.use(express.static('./2-express-tutorial/method-static'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())


app.get('/api/pepole', (req, res) => {
    console.log(pepoles)
    res.status(200).json({sucssrs: true, data: pepoles})
})


app.post('/api/pepole', (req, res) => {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success: false, msg: 'please insert name'})
    }
    res.status(201).json({success: true, data: name})  // person

    // find id
    let getId = pepoles.length
    console.log(getId)

    let newPepole = [...pepoles]
    console.log(newPepole)
    newPepole.push({id: getId, name: name})
    console.log(newPepole)
    const pathFileData = path.resolve(__dirname, '2-express-tutorial', 'data.js')
    //writeFileSync(pathFileData, `${pepoles.join({id: getId, name: name})}`)
})


app.post('/login', (req, res) => {
    res.send('post')
    const { name } = req.body
    if(name) {
       return res.status(200).send(`Wellcom ${name}`)
    }
    else {
        res.status(401).send('Please provide again')
    }
})


app.listen(5000, () => {
    console.log("server is listening on port 5000")
})




/*

const pepoles = [
    {id: 0, name: 'Alex'},
    {id: 1, name: 'Chen'},
    {id: 2, name: 'Ben'},
    {id: 3, name: 'Jhon'},
]


module.exports = { pepoles };
*/