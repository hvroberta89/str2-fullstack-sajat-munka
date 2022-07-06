const http = require('http')
const port = 8080

http.createServer((req, res) => {
  res.write('Hellooooo! Holy Node!')
  res.end()
}).listen(port)

console.log(`Server is running at http://192.168.1.101:${port}`)