function selection(arr){
    for ( var i = 0 ; i < arr.length ; i ++){
        var min = i
        
        for ( var j = i+1 ; j < arr.length ; j++){
            if(arr[j] < arr[min]) {
                min = j;
            }
        }

        temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
        
    }

    return arr    
}

console.log(selection([33,2,52,106,73])); //[2,33,52,73,106]
console.log(selection([13,5,22,99,11])); //[5,11,13,22,99]

/*
Input
[33,2,52,106,73]

[13,5,22,99,11]

Output
[2,33,52,73,106]

[5,11,13,22,99]
*/