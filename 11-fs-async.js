const {readFile, writeFile} = require('fs')

console.log('starting...')
//without utf-8, data will be printed as buffer
readFile('./content/first.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err)
        return;
    }
    const first = data;

    readFile('./content/second.txt', 'utf-8', (err, data) => {
        if(err) {
            console.log(err)
            return;
        }

        const second =data;

        //flag:'a' - append new text to the end of current file, otherwise override the current file
        writeFile('./content/result-async.txt', `Result is ${first} ${second}`, {flag: 'a'}, (err) => {
            if(err){
                console.log(err)
                return;
            }
            console.log('writing finished..')
        })
    })
})

console.log('ending...')