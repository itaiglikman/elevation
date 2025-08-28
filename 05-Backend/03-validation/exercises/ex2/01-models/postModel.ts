import { Request } from "express";
import { BodyComment, BodyPost, ClientError, Comment, Post, Posts } from "../utils/types";
import { validationResult } from "express-validator";
const postsData = require("../data/posts.json");

const posts: Posts = postsData;

function getPosts() {
    return posts;
}

function getPostById(id: string): Post {
    return posts[id];
}

function addPost(post: BodyPost): Post {
    console.log('postModel add post');
    const newPost = { ...post, id: generatePostId(), comments: [] };
    posts[newPost.id] = newPost;
    return newPost;
}

function getCommentByPostIdAndCommentId(postId: string, commentId: number): Comment {
    const post = getPostById(postId) as Post;
    console.log(post);
    const comment = post.comments.find(c => c.id === commentId);
    return comment;
}

function addComment(comment: BodyComment): Post {
    const post = getPostById(comment.postId);
    const newComment = { ...comment, id: generateCommentId(post) };
    post.comments.push(newComment);
    return post;
}

function generatePostId() {
    const id = Object.keys(posts).length + 1;
    return id;
}

function generateCommentId(post: Post): number {
    const id = post.comments.length + 1;
    return id;
}

function validateComment(req: Request) {
    const postId = req.params.id;
    if (!getPostById(postId)) {
        throw new ClientError(400, 'No post with id: ' + postId);
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("comment validation error: ", errors.array());
        const errorMessages = errors.array().map(err => err.msg);
        throw new ClientError(400, errorMessages.join(', '));
    }
}

export default {
    getPosts,
    addPost,
    getPostById,
    getCommentByPostIdAndCommentId,
    addComment,
    validateComment,
}