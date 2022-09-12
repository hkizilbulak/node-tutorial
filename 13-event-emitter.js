const {EventEmitter} = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
    console.log('First emitter')
})

customEmitter.on('response', (name, id) => {
    console.log(`Parameter emitter »» name: ${name}, id: ${id}`)
})

customEmitter.emit('response', 'mary', 123)

/*print:
    First Emitter
    Parameter emitter »» name: mary, id: 123
*/