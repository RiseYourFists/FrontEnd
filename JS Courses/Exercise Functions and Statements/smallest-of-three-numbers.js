function smallest(num1, num2, num3){
    let arr = [num1, num2, num3];
    let smallest = Number.MAX_SAFE_INTEGER;

    arr.forEach(num => {
        if(num < smallest){
            smallest = num;
        }
    });
    console.log(smallest);
}