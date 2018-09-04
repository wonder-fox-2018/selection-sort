function selSort(input) {
    let min = input[0]
    let output = ''
    for ( let i = 0; i < input.length; i++) {
        let minIdx = i
        debugger
        for ( let j = i+1; j < input.length; j++ ) {
            if ( input[j] < input[minIdx] ) {
                minIdx = j;
                debugger
            }
        }
        output = input[i]
        input[i] = input[minIdx]
        input[minIdx] = output
        debugger
    }
    return input
}


console.log(selSort([33, 2, 52, 106, 73])) // [2, 33, 52, 73, 106]
console.log(selSort([13, 5, 22, 99, 11]))  // [5, 11, 13, 22, 99]