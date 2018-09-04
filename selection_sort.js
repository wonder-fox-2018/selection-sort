function selectionSort(data) {
    var tampung = [];
    
    rekurSelect(data);
    function rekurSelect(input) {
        if(input.length === 0) {
            return null;
        }
        
        var dataUlang = input;
        var tmp = dataUlang[0];
        var dapetMin = nilaiMin(dataUlang);
    
        var sementara = tmp;
        if(dapetMin[0] < tmp) {
            tmp = dapetMin[0];
            dataUlang[dapetMin[1]] = sementara;
        }
    
        tampung.push(tmp);
        dataUlang.shift();
        return rekurSelect(dataUlang);
    }

    return tampung;
}

function nilaiMin(data) {
    var min = data[0];
    var index = 0;
    for(var i = 0; i < data.length; i++) {
        if(data[i] < min) {
            min = data[i];
            index = i;
        }
    }
    return [min, index];
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));

/*
selection sort adalah teknik sortir data dengan nilai minimum data yang dikanan.
*/