const i = 4;
let lengthFileName = 0;
let shopList = []

console.log(i)

console.log(__dirname)
console.log(__filename)

const nameFile = __filename
console.log(nameFile.slice(0, 5))
console.log(nameFile.length) // length of file name
console.log(nameFile.indexOf('exam1.js'))
console.log(nameFile.replace('Am', 'Ch'))
console.log(nameFile.toLowerCase())
console.log(nameFile.toUpperCase())

lengthFileName = nameFile.length
console.log(lengthFileName)


console.log("\n") // end line