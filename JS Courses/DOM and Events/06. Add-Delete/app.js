function addItem() {
    let input = document.getElementById('newItemText');
    let items = document.getElementById('items');
    let newLiItem = document.createElement('li');

    let deleteBtn = document.createElement('a')
    deleteBtn.textContent = '[Delete]';
    deleteBtn.setAttribute('href', '#');
    deleteBtn.addEventListener('click', delElement);

    newLiItem.textContent = input.value;
    newLiItem.appendChild(deleteBtn);

    items.appendChild(newLiItem);
    

    function delElement(e){
        let target = e.target;
        target.parentElement.remove();
    }
}