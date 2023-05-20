function extractText() {
    const list = document.getElementsByTagName('li');
    let text = [];
    for (const element of list) {
        text.push(element.textContent)
    }
    const result = document.getElementById('result');
    result.textContent = text.join('\n')
}