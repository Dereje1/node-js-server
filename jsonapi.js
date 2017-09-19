var http = require('http')
var url = require('url')

var server = http.createServer(function(req,res){
  let parsedObject = url.parse(req.url,true)
  let parsedTime = parseTimeStamp(parsedObject.query.iso)
  let sentResult;
  if(req.url.indexOf('parsetime')!=-1){//important must check for url
    sentResult = parsedTime[0]
  }
  else if(req.url.indexOf('unixtime')!=-1){
    sentResult = parsedTime[1]
  }
  else{
    sentResult = ''
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(sentResult)
})
server.listen(process.argv[2])

function parseTimeStamp(query){
  //query in iso format
  let fullDate = new Date(query);
  let unixTime = fullDate.getTime();

  let timeObject={}
  timeObject.hour = fullDate.getHours();
  timeObject.minute = fullDate.getMinutes();
  timeObject.second = fullDate.getSeconds();

  return [JSON.stringify(timeObject),JSON.stringify({"unixtime": unixTime})];
}

/* given solution
var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
*/
