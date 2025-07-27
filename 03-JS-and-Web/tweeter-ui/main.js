import Tweeter from './Models/tweeter.js';
import render from './render.js';

const tweeter = new Tweeter()
const postsContainer = $('#postsContainer');
const posts = tweeter.getPosts();
const rerender = () => render.renderUI(tweeter.getPosts());
rerender();

// delete post:
$(postsContainer).on('click', '.delete-post', (event) => {
    try {
        const deletePostBtn = event.target;
        const postDataId = $(deletePostBtn).attr('data-id');
        console.log(tweeter.removePost(postDataId));
        console.dir(posts, { depth: null });
        rerender();
    } catch (error) {
        console.error(error.message);
        throw new Error(error);
    }
});

// add comment:
$(postsContainer).on('click', '.comment-button', (event) => {
    try {
        const commentBtn = event.target;
        const postDataId = $(commentBtn).attr('data-id');
        const text = $(`input[data-id=${postDataId}]`).val();
        console.log(tweeter.addComment(postDataId, text));
        rerender();
    } catch (error) {
        console.error(error.message);
        throw new Error(error);
    }
});

// delete comment:
$(postsContainer).on('click', '.delete-comment', (event) => {
    try {
        const deleteComment = event.target;
        const commentDataId = $(deleteComment).attr('data-id');
        const postDataId = $(deleteComment).closest('.post').attr('data-id');
        console.log(tweeter.removeComment(postDataId, commentDataId));
        console.dir(posts, { depth: null });
    } catch (error) {
        console.error(error.message);
        throw new Error(error);
    }
    rerender();
});

// add comment:
$('.add-post-btn').on('click', () => {
    try {
        const text = $('.add-post-input').val();
        console.log(tweeter.addPost(text));
        rerender()
    } catch (error) {
        console.error(error.message);
        throw new Error(error);
    }
});