 function sort(numbers){
    for(var i = 0 ; i < numbers.length; i++){
        for(var j = i; j < numbers.length; j++){
            if(numbers[i]>numbers[j]){
                var aux = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = aux;
            }
        }
    }
    
    return numbers;
 }

 console.log(sort([10,9,8,7,6,5,4,3,2,1]));
 console.log(sort([100,9,8,70,1,50,33,21,2,1]));