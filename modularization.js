//import list generating module
let listGenerator = require("./mymodule.js")
//invoke function with params, including call back
listGenerator(process.argv[2],process.argv[3],callback)

function callback(err,response){
  if(err){return console.log("The following Error Occured ", err)}
  for (let i=0;i<response.length;i++){
    console.log(response[i])
  }
}
