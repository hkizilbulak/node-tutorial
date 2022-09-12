// GLOBALS - NO WINDOW

//__dirname - path to current directory
//__filename - file
//require - function to use modules(CommonJs)
//module - info about to current module(file)
//process - info about env where program is being executed

console.log(`Current directory »» ${__dirname}`)
console.log(`Current file name »» ${__filename}`)

//print 'Hello World' after one second
setTimeout(() => {
    console.log('Hello World')
}, 1000);

//print 'Hello World' at each one second
setInterval(()=> {
    console.log('Hello World')
}, 1000)