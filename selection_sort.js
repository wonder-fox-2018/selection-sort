function selectionSort(arr) {
   
    for (var i = 0; i < arr.length; i++) {       
        var min = arr[i]
        var indexAcuan = i
        for (var j = i+1; j < arr.length; j++){
            if (min > arr[j]) {
                min = arr[j]
                var indexMin = j
                
            }
            
            //console.log(arr[j])
        }    
        if (arr[i] > min) {
            arr[indexMin] = arr[i];
            arr[i] = min
           
        }
        
    }
    return arr
}

console.log(selectionSort([33, 22, 52, 106, 73])) // 22, 33, 52, 73, 106
console.log(selectionSort([13, 5, 22, 99, 1,  11]))
console.log(selectionSort([13, 21, 1, 8, 7])) // 1, 7, 8, 13, 21
