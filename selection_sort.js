//
// function sort(input){
//   for (var i = 0; i < input.length; i++) {
//     var index = i;
//     var tmp;
//     for (var j = 0; j < input.length; j++) {
//        // console.log(input[j]+" > "+ input[index])
//       if (input[j] > input[index]) {
//         index = j
//         // console.log(input[j])
//       }
//     }
//     tmp = input[i]
//     input[i] = input[index]
//     input[index] = tmp
//   }
//   console.log(input)
// }
function sort(input){

  for (var i = 0; i < input.length-1; i++) {
    var temp = input[i]
    var index_min = input[i];
    var min = input[i]
    for (var j = i+1; j < input.length; j++) {
      if (input[j] < min) {
        min = input[j]
        index_min = j
      }
    }
    if (min < temp) {
      input[i] = min
     // min = nums[index_min]
      input[index_min] = temp
    }
  }
  return input
}

console.log(sort([33,2,52,106,73])); // [2, 33, 52, 73, 106]
console.log(sort([13,5,22,99,11])); // [5, 11, 13, 22, 99]
