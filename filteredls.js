const fs=require('fs');
const path = require('path');
fs.readdir(process.argv[2],function(err,contents){

  for(let i=0;i<contents.length;i++){
    if (path.extname(contents[i])===('.'+process.argv[3])){
      console.log(contents[i])
    }
  }
})
