const EventEmitter = require('./EventEmitter')

//példányosítom az eventEmitter class-t
const eventEmitter = new EventEmitter()
// az eventEmitter segítségével már megtudom hívni az on metódust
eventEmitter.on('speak', () => console.log('Zombie says "Grrrrr"'))
eventEmitter.on('speak', () => console.log('Hungry zombie says "Harr harr"'))
eventEmitter.on('walk', () => console.log('Deads are walking'))

eventEmitter.emit('speak')
eventEmitter.emit('walk')

