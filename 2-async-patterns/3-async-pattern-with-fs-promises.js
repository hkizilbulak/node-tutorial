const {readFile, writeFile} = require('fs').promises


const start = async () => {
    const first  = await readFile('./content/first.txt')
    const second = await readFile('./content/second.txt')
    await writeFile('./content/result-async-with-fs-promises.txt', `This is async with fs promises result : ${first} ${second}`)

}

start();

