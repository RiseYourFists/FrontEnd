function solve(input){
    let inputType = typeof(input);

    if(inputType !== 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
        return;
    }

    let result = Math.pow(input, 2) * Math.PI;
    console.log(result.toFixed(2));
}

solve(5);
solve('hi');