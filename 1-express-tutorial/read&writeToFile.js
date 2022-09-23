const {readFileSync, writeFileSync} = require('fs')

const firstFile = readFileSync('./Content/SubText/first.txt', 'utf8')
const secondFile = readFileSync('./Content/SubText/second.txt', 'utf8')

console.log(firstFile)

writeFileSync(
    './Content/SubText/syncFile.txt', 
    `First file: ${firstFile} second file ${secondFile}`, 
    {flag: 'a'} // flag: a add order to text
)
