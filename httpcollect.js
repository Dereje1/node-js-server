const bl = require('bl')
const http=require('http')

let link = process.argv[2]
http.get(link,function(response){
  response.pipe(bl(function (err, data) {
    console.log(data.toString().split('').length)
    console.log(data.toString())
  }))
})
