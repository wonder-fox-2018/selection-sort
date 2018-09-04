

function selectionSort(input) {
    
    for (let i = 0; i < input.length-1; i++) {
        let small = input[i]
        let index = i
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] < small) {
                small = input[j]
                index = j
            }
        }
        let temp = input[i] 
        input[i] =  small 
        input[index] = temp
        
    }
return input
}

console.log(selectionSort([33,2,52,106,73]));
console.log(selectionSort([13,5,22,99,11]));

