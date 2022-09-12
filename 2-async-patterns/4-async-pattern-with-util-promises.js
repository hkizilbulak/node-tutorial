const {readFile, writeFile} = require('fs')
const util = require('util')
const readFilePromises = util.promisify(readFile)
const writeFilePromises = util.promisify(writeFile)

const start = async () => {
    const first  = await readFilePromises('./content/first.txt')
    const second = await readFilePromises('./content/second.txt')
    await writeFilePromises('./content/result-async-with-util-promises.txt', `This is async with util promises result : ${first} ${second}`)
}

start();

