const {readFile, writeFile} = require('fs').promises

const start = async() => {
    try {
        const first = await readFile('./Content/SubText/first.txt', 'utf-8');
        const second = await readFile('./Content/SubText/second.txt', 'utf-8')
        console.log(first, second)
        await writeFile('./Content/SubText/writeFromFile.txt', `${first} ${second}`)
    }
    catch(error) {
        console.log(error)
    }
}

start()


// const {readFile, writeFile} = require('fs')

// readFile('./Content/SubText/first.txt', 'utf8', (err, result) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     const first = result;

//     readFile('./Content/SubText/first.txt', 'utf8', (err, result) => {
//         if(err) {
//             console.log(err)
//             return
//         }
//         const second = result;

//         writeFile('./Content/SubText/result-async.txt',
//         `first file content is: ${first} and second file content is ${second}`,
//         (err, result) => {
//             if(err) {
//                 console.log(err)
//                 return
//             }
//             console.log(result)
//         }
//         )
//     })
// })
