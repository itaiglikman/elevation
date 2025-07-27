function postHeaderUI(post) {

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

    return postHeader;

}

export default postHeaderUI;