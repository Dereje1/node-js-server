var net = require('net')
let mydate = new Date()
let monthFormat = (mydate.getMonth()+1)<10 ? "0"+(mydate.getMonth()+1) : mydate.getMonth()+1
let dayFormat = (mydate.getDate())<10 ? "0"+(mydate.getDate()) : mydate.getDate()
let hourFormat = mydate.getHours()<10 ? "0"+mydate.getHours() : mydate.getHours()
let minuteFormat = mydate.getMinutes()<10 ? "0"+mydate.getMinutes() : mydate.getMinutes()

let allDate = mydate.getFullYear()+"-" + monthFormat +"-"+dayFormat + " " + hourFormat + ":" + minuteFormat
var server = net.createServer(function (socket) {

  socket.write(allDate+"\n")
  socket.end()
})
server.listen(process.argv[2])
