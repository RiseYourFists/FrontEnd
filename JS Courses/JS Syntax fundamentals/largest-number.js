function largest(num1, num2, num3){
    let biggest = Number.MIN_SAFE_INTEGER;
    let arr = [num1, num2, num3];
    arr.forEach((el)=>{
        if(el > biggest){
            biggest = el;
        }
    })
    console.log(`The largest number is ${biggest}.`)
}

largest(5, -3, 16);
largest(-3, -5, -22.5)