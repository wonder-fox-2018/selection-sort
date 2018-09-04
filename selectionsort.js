function selectionsort(arr) {
    
    for (var i = 0; i < arr.length; i++) {
        acuan1 = arr[i];
        acuan2=arr[i+1];
        i_acuan2=i+1;    
        for (var j = i_acuan2 + 1; j < arr.length; j++) {
            if(arr[j]<acuan2){
                acuan2=arr[j];
                i_acuan2=j;
            } 
        }
        if(acuan2<acuan1){
            arr[i]=acuan2;
            arr[i_acuan2]=acuan1;
        }
        
    }
    return arr;

}

//input
console.log(selectionsort([33, 2, 52, 106, 73]));
console.log(selectionsort([13, 5, 22, 99, 11]));