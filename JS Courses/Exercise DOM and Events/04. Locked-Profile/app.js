function lockedProfile() {
    const profiles = document.querySelectorAll('div.profile');
    for (const profile of profiles) {
        let button = profile.children[10];
        button.addEventListener('click', onClickHandler);
    }
    
    function onClickHandler(e){
        const button = e.target;
        const profile = button.parentElement;
        const extraField = profile.children[9];
        
        if(profile.children[2].checked){
            return;
        }

        if(button.textContent === 'Show more'){
            extraField.style.display = 'block';
            button.textContent = 'Hide it';
            return;
        }

        extraField.style.display = 'none';
        button.textContent = 'Show more';

    }
}