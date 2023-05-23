function toggle() {
    const toggleBtn = document.querySelector('span.button');
    const extraWindow = document.getElementById('extra');

    let state = toggleBtn.textContent;

    if(state === 'More'){
        extraWindow.style.display = 'block';
        toggleBtn.textContent = 'Less';
        return;
    }
    
    extraWindow.style.display = 'none';
    toggleBtn.textContent = 'More';
}