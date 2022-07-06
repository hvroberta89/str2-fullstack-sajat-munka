class EventEmitter {
    constructor () {
        this.events = []
    }

    //feliratkozunk az eseményre
    on ( eventType, listener ) {
        // első lépésként ellenőrizzük, hogy az adot esemény létezik-e már vagy sem
        this.events[eventType] = this.events[eventType] || []
        // az összes elemet spread operátorral szétbontom és egy listenert hozzáfűzök
        this.events[eventType] = [...this.events[eventType], listener]
    }

    //emitáljuk (kibocsájtjuk) az eseményt
    emit (eventType) {
        if (this.events[eventType]) {
            this.events[eventType].forEach(listener => listener())
        }
    }
}

module.exports = EventEmitter