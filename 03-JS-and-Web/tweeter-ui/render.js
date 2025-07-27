function renderUI(posts) {



    for (const post of posts) {

        const postContainer = $('<div>')
            .attr('data-id', post.id)
            .addClass('post');

        const postText = $('<div>')
            .attr('data-id', post.id)
            .addClass('post-text')
            .text(post.text);
        const deletePost = $('<div>')
            .attr('data-id', post.id)
            .addClass('delete')
            .text('Delete post');


        const comments = $('<div>')
            .addClass('comments')
        for (const comment of post.comments) {
            const commentText = $('<div>')
                .attr('data-id', comment.id)
                .addClass('comment')
                .text(comment.text);
            const deleteComment = $('<div>')
                .attr('data-id', comment.id)
                .addClass('delete-comment')
                .text('X');

            comments.append(commentText, deleteComment);
        }

        const newCommentInput = $('<input>').attr({
            'placeholder': 'Got something to say?',
            'type': 'text',
            // 'class': 'new-comment-input'
        });
        const sendCommentBtn = $('<button>').addClass('comment-button');

        postContainer.append(postText, deletePost, comments, newCommentInput, sendCommentBtn);

        $('#tweeter').append(postContainer);
    }



}

export default { renderUI };