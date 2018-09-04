function sort(array) {
    var temp;

    for(var i = 0; i < array.length; i++){
        var min = i;
        for(var j = i + 1; j < array.length; j++) {
            if(array[j] < array[min]){
                min = j
            }
        }
        temp = array[i];
        array[i] = array[min];
        array[min] = temp;
        
    }
  return array   
}

console.log(sort([ 33, 2, 52, 106, 73])); //[2, 33, 52, 73, 106]
console.log(sort([ 13, 5, 22, 99, 11])); //[5, 11, 13, 22, 99]

