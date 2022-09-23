const path = require('path')

console.log(path.sep) // return sign '/'
console.log(path.extname('index.html')) // return .html

const filePath = path.join('/Content', 'SubText', 'test.txt')
console.log(filePath)

const baseName = path.basename(filePath)
console.log(baseName)

const absolute = path.resolve(__dirname, 'Content', 'SubText', 'test.txt')
console.log(absolute)
