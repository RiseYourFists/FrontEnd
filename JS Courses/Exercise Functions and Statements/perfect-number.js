function isPerfectNumber(number){
    let divisors = getDivisors(number);
    let divisorSum = sum(divisors);

    if(divisorSum < 0 || divisorSum !== number){
        console.log('It\'s not so perfect.')
        return;
    }
    console.log('We have a perfect number!')

    function getDivisors(num){
        let divisors = [];
        for (let i = 1; i < num; i++) { 
            if( number % i === 0){
                divisors.push(i);
            }
        }
        return divisors;
    }

    function sum(arr){
        let sum = 0;
        arr.forEach(num => {
            sum += num;
        });
        return sum;
    }
}

isPerfectNumber(6)
isPerfectNumber(28)
isPerfectNumber(1236498)