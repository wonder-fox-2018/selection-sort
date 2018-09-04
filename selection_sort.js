function selectionShort(values){
    let sortResult = []
   while(values.length !== 0){
       let minValue =  Math.min(...values)
       let indexMinValue = values.indexOf(minValue)
       sortResult.push(minValue)
       values.splice(indexMinValue, 1)
   }
   return sortResult
}

console.log(selectionShort([33,2,52,106,73]))
console.log(selectionShort([13,5,22,99,11]))