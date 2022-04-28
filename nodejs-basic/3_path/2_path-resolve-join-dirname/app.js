const { resolve, join } = require('path')

//***Annak a  mappának az abszolút elérési útvonala, ahol a terminálban épp állok***
console.log(resolve())

//***Annak a  mappának a relatív elérési útvonala, ami az aktuális munkakönyvtár***
console.log(join())

//***Az aktuális fájl abszolút elérési útvonala***
console.log(__dirname)

console.log(resolve('./szamarmese.txt'))
console.log(join(__dirname, './szamarmese.txt'))