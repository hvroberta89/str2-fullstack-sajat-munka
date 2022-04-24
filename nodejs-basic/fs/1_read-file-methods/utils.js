const fs = require('fs')

//Fájl beolvasása szinkron módon
const readFileSyncLog = (path, options = {}) => {
    console.log(fs.readFileSync(path, options))
}

//Fájl beolvasása aszinkron művelettel - ez a gyakoribb
const readFileLog = (path, options = {}) => {
    fs.readFile(path, options, 
    (err,data) => {
        if (err) throw err
        console.log(data)
    })
}

module.exports = Object.freeze({
    readFileSyncLog,
    readFileLog
})