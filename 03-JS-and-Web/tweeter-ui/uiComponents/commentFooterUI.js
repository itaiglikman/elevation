function commentFooterUI(post) {

    const newCommentInput = $('<input>').attr({
        'data-id': `${post.id}`,
        'placeholder': 'Got something to say?',
        'type': 'text',
        'class': 'new-comment-input'
    });
    const sendCommentBtn = $('<button>')
        .attr('data-id', post.id)
        .addClass('comment-button')
        .text('comment');


    const msgArea = $('<div>').
        addClass('msg-area').text('msg')


    const commentFooter = $('<div>')
        .addClass('comment-footer')
        .append(newCommentInput, sendCommentBtn, msgArea);

    return commentFooter;

}

export default commentFooterUI;