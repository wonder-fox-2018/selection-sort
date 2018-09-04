function selectionSort(arr) {
    for (var i=0; i<arr.length-1; i++) {

        // PENENTUAN MIN: 
        var min = arr[i];
        var tempIndex = i;
        for (var j=i+1; j<arr.length; j++) { 
            if (arr[j] < min) { 
                min = arr[j];
                tempIndex = j;
            }
        }
        

        // TUKAR POSISI:
        if (min < arr[i]) {
            var tempDepan = arr[i];
            arr[tempIndex] = tempDepan;
            arr[i] = min;
        }
    }
    return arr;
}



// TESTCASE:
console.log(selectionSort([33,2,52,106,73]));
console.log(selectionSort([13,5,22,11,99]));
console.log(selectionSort([31,2,22,99,11]));

