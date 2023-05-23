function deleteByEmail() {
    let input = document.querySelector('input[name="email"]');
    let result = document.getElementById('result');
    let emailTarget = input.value;
    let emails = Array.from(document.querySelectorAll('#customers > tbody > tr > td:nth-child(even)'));
    let emailToDelete = emails.find((email)=> email.textContent === emailTarget);

    if(emailToDelete === undefined){
        result.textContent = 'Not found.'
    }
    else{
        emailToDelete.parentElement.remove();
        result.textContent = 'Deleted.'
    }

    input.value = '';
}   
