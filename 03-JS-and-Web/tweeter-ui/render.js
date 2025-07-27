import commentsUI from "./uiComponents/commentsUI.js";
import commentFooterUI from "./uiComponents/commentFooterUI.js";
import postHeaderUI from "./uiComponents/postHeaderUI.js";

function renderUI(posts) {
    $('#postsContainer').empty();


    for (const post of posts) {
        const postContainer = $('<div>')
            .attr('data-id', post.id)
            .addClass('post');

        const postHeader = postHeaderUI(post);
        const comments = commentsUI(post);
        const commentFooter = commentFooterUI(post);
        postContainer.append(postHeader, comments, commentFooter);

        $('#postsContainer').append(postContainer);
    }
}

export default { renderUI };