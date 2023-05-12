function calc(first , second , operation){
    let add = (num1 , num2)=> num1 + num2;
    let subtract = (num1 , num2)=> num1 - num2;
    let divide = (num1 , num2)=> num1 / num2;
    let multiply = (num1 , num2)=> num1 * num2;

    let operationList ={
        add,
        subtract,
        divide,
        multiply
    }

    console.log(operationList[operation](first, second));
}

calc(5,5,'multiply');