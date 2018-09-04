//selection sort according to psuedocode
function selectionSort(array){
    let result = []
    while(array.length != 0){
        let min = Math.min.apply(null,array)
        result.push(min)
        array.splice(array.indexOf(min),1)
    }
    return result
}
console.log(selectionSort([33,2,52,106,73]))



//try InsertionSort
function insertionSort(array){
    for (let i=0;i<array.length;i++) {
        let tmp = array[i]
        for (let j=i+1;j<array.length;j++) {
            if(tmp >= array[j]){
                // this is basic swap method
                tmp = array[j]
                array[j] = array[i]
                array[i] = tmp
            }  
        } 
    }
    return array
}
console.log(insertionSort([33,2,52,106,73]))