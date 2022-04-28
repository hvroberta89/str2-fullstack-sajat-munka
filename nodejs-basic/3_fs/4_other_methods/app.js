const { 
    unlinkWrapper,
    renameWrapper,
    copyFileWrapper,
    statWrapper,
    chmodWrapper
} = require('./utils')

//***fájl törlése***
//unlinkWrapper({ path: './szamarmese.txt' })

//***fájl átnevezése***
// renameWrapper({
//     oldPath: './poets.txt',
//     newPath: './POETS.txt'
// })

//***fájl másolása***
// copyFileWrapper({
//     src: './halaltanc-ballada.txt',
//     dest: './books/halaltanc-ballada.txt'
// })

//***fájl adatainak lekérdezése***
// statWrapper({
//     path: './halaltanc-ballada.txt',
//     callback(err, stats) {
//         if (err) throw err
//         console.log(stats)
//     }
// })

//***fájl jogosultságának módosítása***
chmodWrapper({
    path: './halaltanc-ballada.txt',
    mode: 744
})