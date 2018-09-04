function selectionSort(data) {
	for (var i = 0; i < data.length-1; i++) {
		var temp = data[i];
		var min = data[i];
		var index_min;

		for (var j = i+1; j < data.length; j++) {
			if (data[j] < min) {
				min = data[j];
				index_min = j;
			}
		}

		if (min < temp) {
			data[i] = min;
			data[index_min] = temp;
		}
	}

	return data;
}

console.log(selectionSort([33, 2, 52, 106, 73])); // [2, 33, 52, 73, 106]
console.log(selectionSort([13, 5, 22, 99, 11])); // [5, 11, 13, 22, 99]