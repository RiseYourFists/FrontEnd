function addItem() {
    let input = document.querySelector('input[type="text"]');
    let newLiItem = document.createElement('li');
    let items = document.getElementById('items')

    
    newLiItem.textContent = input.value;
    items.appendChild(newLiItem);
    input.value = '';
}