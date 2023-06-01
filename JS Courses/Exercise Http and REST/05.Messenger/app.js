function attachEvents() {
    const display = document.getElementById('messages');
    const authorInput = document.querySelector('input[name="author"]');
    const commentInput = document.querySelector('input[name="content"]');

    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    submitBtn.addEventListener('click', submitEventHandler);
    refreshBtn.addEventListener('click', refreshEventHandler);

    const BASE_URL = 'http://localhost:3030/jsonstore/messenger/';

    async function submitEventHandler(){
        
        let data = {
            author: authorInput.value,
            content: commentInput.value
        }

        let jsonString = JSON.stringify(data);

        await fetch(BASE_URL, {method: 'POST', body: jsonString});
    }

    function refreshEventHandler(){
        
        fetch(BASE_URL)
        .then((res)=> res.json())
        .then((data)=> {
            let keys = Object.keys(data);
            let entries = [];
            for (const key of keys) {
                let author = data[key].author;
                let content = data[key].content;

                entries.push(`${author}: ${content}`);
            }

            display.textContent = entries.join('\n');
        })
    }
}

attachEvents();