const http = require('http')
const { createReadStream } = require('fs')
const port = 8080

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  const name = 'John'
  //létrehoztam egy readableStreamet
  const readableStream = createReadStream('./index.html')
  //feliratkoztam a data eventre, kiolvasom a fájl tartalmát egy pufferbe (chuck) 
  readableStream.on('data', chuck => {
    //átalakítom a chuck tartalmát stringé
    const htmlFragment = chuck.toString().replace(/\{\{name\}\}/g, name)
    // response write metódushívás segítségével beleírom a tartalmát
    res.write(htmlFragment)
  })
  // feliratkozom az end eventre és végrehajtom a response end metódusát
  readableStream.on('end', () => res.end())
}).listen(port)

console.log(`Server is running at http://192.168.1.101:${port}`)