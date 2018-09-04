function selectionShort(values){
    let sortResult = []
   while(values.length !== 0){
       let minValue =  Math.min(...values)
       sortResult.push(minValue)
       for(let i = 0; i < values.length; i++){
           if(values[i] === minValue){
               values.splice(i, 1)
           }
       }
   }
   return sortResult
}

console.log(selectionShort([33,2,52,40,73]))
console.log(selectionShort([13,5,22,99,11]))