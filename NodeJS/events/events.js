const { EventEmitter } = require('events')
const ev = new EventEmitter()

// ev.on('saySomething', (message) => {
//     console.log('Eu ouvi você!', message)
// })

// ouvindo eventos uma única vez
ev.once('saySomething', (message) => {
    console.log('Eu ouvi você!', message)
})

ev.emit('saySomething', 'Marcelo')
ev.emit('saySomething', 'Angel')
