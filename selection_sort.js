function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var smallest = arr[i];
        var smallestIndex = i;
        for (let j = i; j< arr.length; j++) {
            if (smallest > arr[j]) {
                smallest = arr[j]
                smallestIndex = j
            }
        }
        arr[smallestIndex] = arr[i];
        arr[i] = smallest
    }
    return arr
}


console.log(selectionSort([33,2,52,106,73]));
console.log(selectionSort([13,5,22,99,11]));