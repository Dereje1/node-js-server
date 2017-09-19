var http = require('http')
var fs = require('fs')

let readStream = fs.createReadStream(process.argv[3]);
var server = http.createServer(function(req,res){
  readStream.pipe(res)
})
server.listen(process.argv[2])
