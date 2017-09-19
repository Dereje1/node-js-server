var http = require('http')
var requestMapper = require('through2-map')

var server = http.createServer(function(req,res){
  if(req.method==="POST"){
      req.pipe(requestMapper(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    }
  else{
    res.end("not POST")
  }
  //readStream.pipe(res)
})

server.listen(process.argv[2])
