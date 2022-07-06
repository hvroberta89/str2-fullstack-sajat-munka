const { readFile } = require('fs').promises

// Létrehozunk egy egyszerű függvényt, amely egy factory lesz
const reader =  (eventEmitter) => {
    const readContent = async (file) => {
        console.log( 'Reading process started \n File:', file )
        try {
            // mentsük el a fájl tartalmát
            const data = await readFile( file, 'utf8' ) 
            console.log('Reading process done successfully')
            eventEmitter.emit('print', data)
        } catch (error) {
            eventEmitter.emit('error', error)            
        }
    }

    const printContent = (content) => {
        console.log('Content: \n', content)
        eventEmitter.emit('close')
    }

    const errorHandler = (err) => {
        console.log('An error occurred', err.message)
    }
    
    const close = ()  => {
        console.log('Printing process done. App closed.')
    }

    return {
        readContent,
        printContent,
        errorHandler,
        close
    }
}

module.exports = reader