function divideFactorial(first, second){
    let result = generateFactorial(first) / generateFactorial(second)
    console.log(result.toFixed(2));

    function generateFactorial(number){
        if(number <= 1){
            return 1;
        }
        return number * generateFactorial(number - 1)
    }
}

divideFactorial(6,2)