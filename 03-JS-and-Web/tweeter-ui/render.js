import commentsUI from "./uiComponents/commentsUI.js";
import commentFooterUI from "./uiComponents/postFooterUI.js";
import postHeaderUI from "./uiComponents/postHeaderUI.js";

function renderUI(posts) {

    for (const post of posts) {
        const postContainer = $('<div>')
            .attr('data-id', post.id)
            .addClass('post');

        const postHeader = postHeaderUI(post);
        const comments = commentsUI(post);
        const commentFooter = commentFooterUI();
        postContainer.append(postHeader, comments, commentFooter);

        $('#tweeter').append(postContainer);
    }
}

export default { renderUI };