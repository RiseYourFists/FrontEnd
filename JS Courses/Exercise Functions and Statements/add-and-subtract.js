function sum(num1, num2, num3){
    let addition = add(num1, num2);
    console.log(subtract(addition, num3));

    function add(num1, num2){
        return num1 + num2;
    }
    
    function subtract(num1, num2){
        return num1 - num2;
    }
}



sum(1, 2, 3);
