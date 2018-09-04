function selectionSort(data){
    for(var i=0;i<data.length-1;i++){
        var currentData=data[i]
        var min=data[i+1]
        var indexMin=i+1
        for(var j=i+1;j<data.length;j++){
            if(data[j]<min){
                min=data[j]
                indexMin=j
            }
        }
        if(min<currentData){
            data[i]=min
            data[indexMin]=currentData
        }
    }
    return data
}
console.log(selectionSort([33,2,52,106,73]))
console.log(selectionSort([13,5,22,99,11]))