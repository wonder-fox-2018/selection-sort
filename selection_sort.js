function selectionSort(arr) {
  let curMin = '', temp = 0, idxMin = 0;
  let elem = 1, noMin = true
  while (elem < arr.length) {
    curMin = arr[elem - 1]
    for (let i = elem; i < arr.length; i++) {
      if (arr[i] < curMin) {
        curMin = arr[i]
        idxMin = i
        noMin = false
      }
    }
    //swap
    if(noMin == false) {
      temp = arr[elem - 1]
      arr[elem - 1] = curMin
      arr[idxMin] = temp
    }
    noMin = true
    elem++
  }
  return arr
}

//input
let inp1 = [33,2,52,106,73]
let inp2 = [13,5,22,99,11]

console.log(selectionSort(inp1));
console.log(selectionSort(inp2));
