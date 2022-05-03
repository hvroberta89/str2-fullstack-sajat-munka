const http = require('http')
const SiteRouter = require('./router/site.router')

const port = 8080

http.createServer(({ url }, res) => {
  SiteRouter[url] 
    ? SiteRouter[url](res) 
    : SiteRouter['/404'](res)
}).listen(port)

console.log(`Server is running at http://192.168.1.101:${port}`)

//http://127.0.0.1 - index.html
//http://127.0.0.1/about - about.html
//http://127.0.0.1/contact - contact.html
