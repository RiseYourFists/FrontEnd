function focused() {
    const elements = Array.from(document.querySelectorAll('input[type="text"]'));
    
    for (const element of elements) {
        element.addEventListener('focus', onFocusHandler)
        element.addEventListener('blur', onBlurHandler)
    }

    function onFocusHandler(e){
        const target = e.target;
        let parent = target.parentElement;
        parent.setAttribute('class','focused');
    }

    function onBlurHandler(e){
        const target = e.target;
        let parent = target.parentElement;
        parent.removeAttribute('class', 'focused')
    }
}