import commentsUI from "./uiComponents/commentsUI.js";

import postHeaderUI from "./uiComponents/postHeaderUI.js";

function renderUI(posts) {
    $('#postsContainer').empty();


    for (const post of posts) {
        const postContainer = $('<div>')
            .attr('data-id', post.id)
            .addClass('post');

        const postHeader = postHeaderUI(post);
        const comments = commentsUI(post);
        postContainer.append(postHeader, comments);

        $('#postsContainer').append(postContainer);
    }
}

export default { renderUI };