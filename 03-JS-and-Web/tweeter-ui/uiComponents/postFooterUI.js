function commentFooterUI() {

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

    return commentFooter;

}

export default commentFooterUI;