const { writeFileSync } = require('fs');
const path = require('path');


// path of logs
const pathFileLogger = path.join(path.resolve(), '2-express-tutorial', 'logs')


const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url
    const time = new Date().toString()
    console.log(method, url, time)
    
    writeFileSync(
        path.join(pathFileLogger, 'urlLog.txt'),
        `Method command: ${method} \t Time: ${time} \t url: ${url}  \n`, 
        { flag: 'a' }
    )
    next()
}


module.exports = logger 