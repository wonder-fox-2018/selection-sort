function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var keyIndex = i;
        
        //get the smallest value from the next partition
        var indexToSwap = keyIndex + 1;
        for (let j = indexToSwap; j < arr.length; j++) {
            if (arr[j] < arr[indexToSwap]) {
                indexToSwap = j;
            }
        }
        
        var doSwap = arr[keyIndex] > arr[indexToSwap];

        if (doSwap) {
            var temp = arr[keyIndex];
            arr[keyIndex] = arr[indexToSwap];
            arr[indexToSwap] = temp;
        }
    }
    return arr;
}

var arr1 = [5,2,10,9];
var arr2 = [13, 5, 22, 99, 11];
var arr3 = [2, 33, 52, 73, 106];

console.log(selectionSort(arr1));
console.log(selectionSort(arr2));
console.log(selectionSort(arr3));


