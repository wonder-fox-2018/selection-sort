function selectionSort(arr) {
    for (let i = 0; i < arr.length-1; i++){
        let small = arr[i]
        let idx = i
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] < small){
                small = arr[j]
                idx = j
            }
        }
        let temp = arr[i]
        arr[i] = small
        arr[idx] = temp
    }
    return arr
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));
