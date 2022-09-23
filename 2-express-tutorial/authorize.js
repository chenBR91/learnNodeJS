
const authorize = (req, res, next) => {
    console.log('authorize')
    const user = req.query['user']
    console.log(user)
    if(user === 'chen') {
        req.user = {user: 'chen', id: 3}
        next()
    }
    else {
        res.status(401).send('Unathorize')
    }
}

module.exports = authorize