function attachEvents() {
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewPostBtn = document.getElementById('btnViewPost');
    const postSelection = document.getElementById('posts');

    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-body');
    const commentSection = document.getElementById('post-comments');

    loadPostsBtn.addEventListener('click', getPostsEvent);
    viewPostBtn.addEventListener('click', loadPostEvent);

    const POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts/';
    const COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments/';

    let comments = [];
    let posts = [];

    function getPostsEvent(){
        elementClear(postSelection);
        
        fetch(POSTS_URL)
        .then((res)=> res.json())
        .then((data)=> {
            posts = data;

            let keys = Object.keys(data);
            for (const key of keys) {
                let post = data[key];

                let title = post.title;
                let id = post.id;

                const option = createElement('option', 'value', id);
                option.textContent = title;

                postSelection.appendChild(option);
            }

            fetch(COMMENTS_URL)
            .then((res)=> res.json())
            .then((commentData)=> {comments = commentData;})
        })
    }

    function loadPostEvent(){
        elementClear(commentSection);

        const selectedOption = postSelection.options[postSelection.selectedIndex];
        const postId = selectedOption.value;

        let postComments = [];
        let keys = Object.keys(comments);

        for (const key of keys) {
            if(comments[key].postId === postId){
                postComments.push(comments[key]);
            }
        }

        postTitle.textContent = selectedOption.textContent;
        postContent.textContent = posts[postId].body;

        for (const comment of postComments) {
            let holder = createElement('li', 'id', comment.id);
            holder.textContent = comment.text;
            commentSection.appendChild(holder);
        }
        
    }

    function createElement(elementType, attrType, attrValue){
        const element = document.createElement(elementType);
        element.setAttribute(attrType, attrValue);
        return element;
    }

    function elementClear(element){
        element.innerHTML = '';
    }
}

attachEvents();