function solve(first, second, operator){
    let result;

    switch(operator){
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '/':
            result = first / second;
            break;
        case '*':
            result = first * second;
            break;
        case '%':
            result = first % second;
            break;
        case '**':
            result = first ** second;
            break;
        default: console.log('Error!')
    }

    console.log(result);

}

solve(5,6,'+');
solve(3,5.5,'*');