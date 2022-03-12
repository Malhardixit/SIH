const http = require('http')
const {app} = require('./main_middleware/app')
server  = http.createServer(app)
var port = process.env.PORT||3000
server.listen(port,()=>{
    console.log('Listening on 3000')
})
