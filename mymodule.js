const fs=require('fs');
const path = require('path');
module.exports = function(dirName,extension,done){//done is the callback

  fs.readdir(dirName,function(err,contents){
    if(err){return done(err)}
    let listArr=[]
    for(let i=0;i<contents.length;i++){
      if (path.extname(contents[i])===('.'+extension)){
        listArr.push(contents[i])
      }
    }
    //send done back with list array
    done(null,listArr)
  })
}
