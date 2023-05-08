function sumDigits(input){
    let sum = 0;
    digits = input.toString();
    for (let i = 0; i < digits.length; i++) {
        sum += Number.parseInt(digits.charAt(i));
        
    }

    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);