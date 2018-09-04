function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var acuan = arr[i]; // start from 13
        var indexAcuan = i; // start from index 0

        for (var j = indexAcuan+1; j < arr.length; j++) {
            var min = arr[indexAcuan+1];
            var indexMin = j

            if (min > acuan) { // start with  13 > 21
                // arr[indexMin] = arr[i]
                // arr[i] = min    
                min = arr[j]             
            }
        }

       // if ()
       
      //console.log(arr , arr[i], min)
     // console.log(`${arr} || ${min} > ${arr[i]}`)
     console.log(arr, min)
    }
}

//console.log(selectionSort([33, 22, 52, 106, 73]))
//console.log(selectionSort([13, 5, 22, 99, 1,  11]))
console.log(selectionSort([13, 21, 1, 8, 7])) // 1, 7, 8, 13, 21
