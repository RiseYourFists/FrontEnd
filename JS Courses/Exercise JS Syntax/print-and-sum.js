function sum(start, end){
    let arr = [];
    let sum = 0;
    for(i = start; i <= end; i++){
        arr.push(i);
        sum += i;
    }

    console.log(arr.join(' '));
    console.log(`Sum: ${sum}`)
}

sum(5, 10);