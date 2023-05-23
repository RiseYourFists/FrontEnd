function subtract() {
    const firstNumInput = document.getElementById('firstNumber');
    const secondNumInput = document.getElementById('secondNumber');
    const result = document.getElementById('result');

    let first = Number(firstNumInput.value);
    let second = Number(secondNumInput.value);

    result.textContent = first - second;
}