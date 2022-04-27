const EventEmitter = require( 'events' )

// példányosítom az EventEmitter() class-t
const eventEmitter = new EventEmitter()

// elkészítem a szükséges függvényeket
const scream = () => console.log( 'I hear scream' )

const toLateToHelp = () => console.log( 'Too late, she is dead' )

const describeTheMurderer = ({ height, hairColor }) => 
    console.log(`Height: ${height}, Hair color: ${hairColor}`)

// iratkozzunk föl ezekre az eseményekre
// on - többször lefuthat az adott függvény
// once - csak egyszer fut le a függvény
eventEmitter.on( 'scream', scream )
eventEmitter.on( 'scream', toLateToHelp )
eventEmitter.once( 'witness', describeTheMurderer )

// kibocsájtjuk az eseményeket
eventEmitter.emit( 'scream' )
eventEmitter.emit( 'scream' )
eventEmitter.emit( 'witness', {height: '180cm', hairColor: 'black'} )
eventEmitter.emit( 'witness', {height: '180cm', hairColor: 'black'} )
// off - le tudunk iratkozni egy adott eseményről
// esetünkben a scream esemény emitálásakor a toLateToHelp már nem fog lefutni 
eventEmitter.off( 'scream', toLateToHelp )
eventEmitter.emit( 'scream' )