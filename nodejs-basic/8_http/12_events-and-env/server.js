const http = require('http')
const SiteRouter = require('./router/site.router')

const port = process.env.PORT || 8080

http.createServer(({ url }, res) => {
  SiteRouter[url] 
    ? SiteRouter[url](res) 
    : SiteRouter['/404'](res)
})
  .on('error', err => console.log(`Server error: ${err.message}`))
  .on('listening', () => console.log(`Server is running at http://192.168.1.101:${port}`))
  .listen(port)



