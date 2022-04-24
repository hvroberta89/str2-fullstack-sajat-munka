const { unlink, rename, copyFile, stat, chmod } = require('fs')

const fileHandlerCallback = (err) => {
    if (err) throw err
    console.log('file process successful')
}


//***fájl törlése***
const unlinkWrapper = ({ path, callback = fileHandlerCallback } = {}) => {
    unlink(path, callback)
}

//***fájl átnevezése***
const renameWrapper = ({ oldPath, newPath, callback = fileHandlerCallback } = {}) => {
    rename(oldPath, newPath, callback)
}

//***fájl másolása***
const copyFileWrapper = ({ src, dest, callback = fileHandlerCallback } = {}) => {
    copyFile(src, dest, callback)
}

//***fájl adatainak lekérdezése***
const statWrapper = ({ path, callback = fileHandlerCallback } = {}) => {
    stat(path, callback)
}

//***fájl jogosultságának módosítása***
// a tulajdonos
// a csoport többi tagjának
// egyéb userek
// READ: 4, WRITE: 2, EXECUTE: 1
// pl.: 777 -> 7- a tulajdonosnak van olvasási(4), írási(2), futtatni(1) jogosultsága (4+2+1=7)
// pl.: 754 -> a tulajdonos tud írni,olvasni és futtatni (4+2+1), a csoport többi tagja tud olvasni és futtatni(4+1), egyéb userek csak olvasni(4)

const chmodWrapper = ({ path, mode, callback = fileHandlerCallback } = {}) => {
    chmod(path, mode, callback)
}

module.exports = {
    unlinkWrapper,
    renameWrapper,
    copyFileWrapper,
    statWrapper,
    chmodWrapper
}