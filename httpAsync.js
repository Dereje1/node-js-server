const bl = require('bl')
const http=require('http')
let responseCollecter=[];
let linkArr = [process.argv[2],process.argv[3],process.argv[4]]
linkArr.map(function(link,idx){//loop thru links
  http.get(link,function(response){//get link data
    response.pipe(bl(function (err, data) {//collect data stream to end
      if (err){console.log("There was an error, ", err)}
      responseCollecter.push([data.toString(),idx])//push dat with index since we don't know which one came first
        if(responseCollecter.length===3){//once all data has been collected
              [0,1,2].map((i)=>{//loop thru ordered index
                responseCollecter.filter(function(r){//filter for correct order and print
                  if(r[1]===i){console.log(r[0])}
                })
              })
            }
          }))
        })
      })
