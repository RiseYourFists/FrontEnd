function sumOddAndEvenDigits(number){
    let arr = spliceToDigits(number)
    let[oddSum, evenSum]= sumOddsAndEvens(arr);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

    function spliceToDigits(number){
        let arr = [];
        for (let i = 0; i < number.toString().length; i++) {
            arr.push(Number.parseInt(number.toString()[i]));
        }
        return arr;
    }

    function sumOddsAndEvens(arr){
        let odds = 0;
        let evens = 0;

        arr.forEach(num => {
            if(num % 2 === 0){
                evens += num;
            }
            else{
                odds += num;
            }
        });

        return [odds,evens];
    }
}

sumOddAndEvenDigits(3495892137259234);