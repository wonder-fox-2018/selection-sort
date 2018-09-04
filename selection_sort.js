function selectionSort(sortIni){
    
    for (var i=0; i<sortIni.length-1; i++){
        var dataSekarang = sortIni[i]
        var nilaiMin = sortIni[i+1]
        var indexNilaiMin = i+1
        for (var j=i+1; j<sortIni.length; j++){
            if (sortIni[j]<nilaiMin){
                nilaiMin=sortIni[j]
                indexNilaiMin=j
            }
        }
        //swap data awal kalo lebih isi pada comparison
        if (nilaiMin<dataSekarang){
            sortIni[i]=nilaiMin
            sortIni[indexNilaiMin]=dataSekarang
        }
    }
    return sortIni
}

console.log(selectionSort([33,2,52,106,73]))
console.log(selectionSort([13,5,22,99,11]))