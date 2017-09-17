//console.log(process.argv)
let args = process.argv.slice(2)

let sum = args.reduce(function(accum,current){
   return Number(accum)+Number(current)
})
console.log(sum)
