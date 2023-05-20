function calc() {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    let result = document.getElementById('sum');
    
    let first = Number(num1.value);
    let second = Number(num2.value);

    result.value = first + second;
}
