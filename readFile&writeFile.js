const {readFile, writeFile} = require('fs')


console.log('\n----------------\n')

readFile('./Content/SubText/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result;

    readFile('./Content/SubText/first.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result;

        writeFile('./Content/SubText/result-async.txt',
        `first file content is: ${first} and second file content is ${second}`,
        (err, result) => {
            if(err) {
                console.log(err)
                return
            }
            console.log(result)
        }
        )
    })
})
