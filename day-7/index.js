var arrayOfNumbers = [1, 2, 3 ];
// Print addition of numbers who are odd  
function SumOfOddNumbersFromArray(array) {
    var addition = 0;
    for(var i = 0 ; i <= array.length -1 ; i++){
        // console.log(array[i])
        if(array[i] % 2 == 1){
            addition = addition + array[i]; 
        }
    }
    console.log(addition)
}
SumOfOddNumbersFromArray(arrayOfNumbers)