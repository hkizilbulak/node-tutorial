const {readFile, writeFile} = require('fs')


const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

getText('./content/first.txt')
.then(result => writeFile('./content/result-async-with-promise.txt', result, {flag: 'a'}, err => {
    if(err) {
        throw err
    }
})).catch(err => console.log(err))

