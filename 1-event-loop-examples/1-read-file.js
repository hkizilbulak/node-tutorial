const {readFile} = require('fs')

console.log('start process')
readFile('./content/first.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(data)
    console.log('read file finish...');
})
console.log('end process');