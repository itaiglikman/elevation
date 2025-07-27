import Comment from "../models/comment.js";
import Post from "../models/post.js";
import validate from "./validate.js";

function checkPostExists(postId, posts) {
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex === -1) throw (`post ${postId} not found`);
    return postIndex;
}

function validateAndFindPost(postId, posts) {
    try {
        validate.validatePostId(postId);
        return checkPostExists(postId, posts);
    } catch (error) {
        console.error(error.message);
        throw (error);
    }
}

function checkCommentExists(commentId, comments) {
    const commentIndex = comments.findIndex(p => p.id === commentId);
    if (commentIndex === -1) throw (`comment ${commentId} not found in this post`);
    return commentIndex;
}

function validateAndFindComment(commentId, comments) {
    try {
        validate.validateCommentId(commentId);
        return checkCommentExists(commentId, comments);
    } catch (error) {
        console.error(error.message);
        throw (error);
    }
}

function createNewPostObj(counter, text) {
    return new Post('p' + counter, text);
}

function createNewCommentObj(counter, text) {
    return new Comment('c' + counter, text);
}

export default {
    checkPostExists,
    validateAndFindPost,
    createNewPostObj,
    createNewCommentObj,
    validateAndFindComment,
}