function addItem() {
    const itemTextInput = document.getElementById('newItemText');
    const valueTextInput = document.getElementById('newItemValue');
    const optionMenu = document.getElementById('menu');

    let newElement = document.createElement('option');
    newElement.setAttribute('value', valueTextInput.value);
    newElement.textContent = itemTextInput.value;

    optionMenu.appendChild(newElement);
    itemTextInput.value = '';
    valueTextInput.value = '';
}