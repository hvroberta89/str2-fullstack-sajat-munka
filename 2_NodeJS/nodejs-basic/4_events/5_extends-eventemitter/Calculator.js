const EventEmitter = require( 'events' )

class Calculator extends EventEmitter {
    sum (a, b) {
        this.emit( 'start' ) // kibocsájtom a start eventet
        console.log( 'Work in progress' )
        this.emit( 'end', a+b ) //mikor lefutott akkor emitálom az end eventet
    }
}

module.exports = Calculator