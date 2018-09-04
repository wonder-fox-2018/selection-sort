function selectionSort(arr) {

    var min = arr[0]   
    var nilaiAcuan = 1; 

    console.log(arr)  

    for (var i = 0; i < arr.length; i++) {
       var min = arr
        for (var j = nilaiAcuan; j < arr.length; j++) {                 
            if (min > arr[j]) {
                min = arr[j]
                var index = j;                 
            }           
        }
        nilaiAcuan++
       // console.log(arr[i],i, min, index, arr[index])
        
        if (arr[i] > min) {
            arr[index] = arr[i]
            arr[i] = min       
             
        }
       
        console.log (arr, 'nilai min :'+min)
       
     
        //if (i === 2) break
    }
    
}

//console.log(selectionSort([33, 22, 52, 106, 73]))
//console.log(selectionSort([13, 5, 22, 99, 1,  11]))
console.log(selectionSort([13, 21, 1, 8, 7]))
