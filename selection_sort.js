function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var currIndex = i;

        //add (i + 1) to take into account the indexing of the initial array before slicing
        var nextSmallestIndex = findSmallestNumberIndex(arr.slice(currIndex + 1)) + (i + 1);
    
        if (arr[currIndex] > arr[nextSmallestIndex]) {
            //swap the index
            var temp = arr[currIndex];
            arr[currIndex] = arr[nextSmallestIndex];
            arr[nextSmallestIndex] = temp;
        }
    
    }
    return arr;
}

function findSmallestNumberIndex(arr) {
    var smallest = arr[0];
    var smallestIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        var currNum = arr[i];
        if (currNum < smallest) {
            smallest = currNum;
            smallestIndex = i;
        }
        
    }
    
    return smallestIndex;
}



var arr1 = [5,2,10,9];
var arr2 = [13, 5, 22, 99, 11];
var arr3 = [2, 33, 52, 73, 106];

console.log(selectionSort(arr1));
console.log(selectionSort(arr2));
console.log(selectionSort(arr3));


