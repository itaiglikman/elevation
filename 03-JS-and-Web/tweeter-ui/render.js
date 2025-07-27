function renderUI(posts) {



    for (const post of posts) {

        const postContainer = $('<div>')
            .attr('data-id', post.id)
            .addClass('post');

        const postHeader = $('<div>')
            .addClass('postHeader');

        const postText = $('<h4>')
            .attr('data-id', post.id)
            .addClass('post-text')
            .text(post.text);
        const deletePost = $('<div>')
            .attr('data-id', post.id)
            .addClass('delete')
            .text('Delete post');

        postHeader.append(postText, deletePost);

        const comments = $('<div>')
            .addClass('comments')
        for (const comment of post.comments) {

            const commentContainer = $('<div>')
                .attr('data-id', comment.id)
                .addClass('comment');
            const commentText = $('<div>')
                .attr('data-id', comment.id)
                .addClass('comment-text')
                .text(comment.text);
            const deleteComment = $('<div>')
                .attr('data-id', comment.id)
                .addClass('delete-comment')
                .text('X');

            commentContainer.append(commentText, deleteComment);
            comments.append(commentContainer);
        }


        const newCommentInput = $('<input>').attr({
            'placeholder': 'Got something to say?',
            'type': 'text',
            'class': 'new-comment-input'
        });
        const sendCommentBtn = $('<button>')
            .addClass('comment-button')
            .text('comment');

        const commentFooter = $('<div>')
            .addClass('comment-footer')
            .append(newCommentInput, sendCommentBtn);

        postContainer.append(postHeader, comments, commentFooter);

        $('#tweeter').append(postContainer);
    }



}

export default { renderUI };