const postsArr = [];
const container = document.getElementById('container');
const postBtn = document.getElementById('postBtn');
const deleteBtn = document.getElementById('deleteBtn');
const postsArea = document.createElement('div');

function render() {
    postsArea.innerHTML = '';
    container.appendChild(postsArea);
    for (let i = 0; i < postsArr.length; i++) {
        const newPost = document.createElement('div');
        newPost.setAttribute('id', `post${i}`);
        newPost.classList.add('post');
        const postName = document.createElement('strong');
        postName.innerHTML = postsArr[i].name + ':';
        const postText = document.createElement('span');
        postText.innerHTML = postsArr[i].text;
        newPost.appendChild(postName);
        newPost.appendChild(postText);
        postsArea.appendChild(newPost);

        newPost.onclick = () => {
            deletePost(i);
        }
    }
}


postBtn.onclick = () => {
    const postName = document.getElementById('nameInput');
    const postText = document.getElementById('textInput');
    postsArr.push({ name: postName.value, text: postText.value });
    postName.value = '';
    postText.value = '';
    render();
}

function deletePost(index) {
    console.log(index);
    postsArr.splice(index, 1);
    render();

}


