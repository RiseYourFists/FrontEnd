function colorize() {
    const tableRows = Array.from(document.querySelectorAll('table tr:nth-child(even)'));
    
    for (const tr of tableRows) {
       tr.style.backgroundColor = 'teal';
    }
}