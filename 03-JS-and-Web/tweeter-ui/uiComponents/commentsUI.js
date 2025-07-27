function commentsUI(post) {

    const comments = $('<div>')
        .addClass('comments')
    for (const comment of post.comments) {
        const commentContainer = $('<div>')
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
    return comments;

}

export default commentsUI;