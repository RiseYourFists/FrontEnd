function checkSign(num1, num2, num3){
    let nums = [num1, num2, num3];
    let counter = 0;
    nums.forEach(element => {
        if(element < 0){
            counter++;
        }
    });

    let msg;
    if(counter % 2 === 0){
        msg = 'Positive';
    }
    else{
        msg = 'Negative';
    }
    console.log(msg);
}

checkSign()