function sumTable() {
    let values = document.querySelectorAll('tbody tr > td:nth-child(even)')
    let result = document.getElementById('sum');
    let sum = 0;

    for (const number of values) {
        sum+= Number(number.textContent);
    }

    result.textContent = sum;
}