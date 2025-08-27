import { Request } from "express"

export type Comment = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export type Post = {
    id: number
    userId: number
    title: string
    body: string
    comments: Comment[]
}

export type PostObject = { [key: number]: Post }

let postsData: PostObject = {};

async function getPosts() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json();
    return posts;
}

async function getComments() {
    const data = await fetch('https://jsonplaceholder.typicode.com/comments')
    const comments = await data.json();
    return comments;
}

function createPostsObject(posts: Post[]) {
    const postObjects: { [key: number]: Post } = {};
    posts.forEach((post) => {
        post.comments = []; // Initialize comments array
        postObjects[post.id] = post;
    });
    return postObjects;
}

function addCommentsToPostsObject(posts: PostObject, comments: Comment[]) {
    comments.forEach(comment => {
        if (posts[comment.postId]) {
            posts[comment.postId].comments.push(comment);
        }
    });
    return posts;
}

async function getPostsObject() {
    const posts = await getPosts();
    const comments = await getComments();
    const formattedPosts = await createPostsObject(posts);
    const postsObject = await addCommentsToPostsObject(formattedPosts, comments);
    postsData = postsObject;
    return postsObject;
}

function getPostsData() {
    return postsData;
}

function getCommentsByPostId(postId: number) {
    return postsData[postId].comments;
}

function addPost(userId: number, title: string, body: string) {
    const id = Object.keys(postsData).length + 1;
    const post: Post = { id, userId, title, body, comments: [] };
    postsData[id] = post;
    return post;
}

function getPostById(id: number) {
    return postsData[id];
}

function deletePostById(id: number) {
    delete postsData[id];
}

function deleteCommentById(postId: number, commentId: number) {
    const post = getPostById(postId);
    if (!post) return 'post not found';
    const commentIndex = post.comments.findIndex(c => c.id == commentId)
    if (commentIndex === -1) return 'comment not found';
    postsData[postId].comments.splice(commentIndex, 1);
}

function searchPostsByQuery(request: Request) {
    const query = request.query;

    // Check which query parameter exists and handle accordingly
    if (query.userId) {
        return getPostByUserId(+query.userId);
    } else if (query.title) {
        return getPostByTitle(query.title as string);
    } else if (query.bodySize) {
        return getPostByBodySize(+query.bodySize);
    } else {
        return null;
    }
}

function getPostByUserId(userId: number) {
    for (const post in postsData) {
        if (postsData[post].userId === userId) return postsData[post];
    }
}

function getPostByTitle(title: string) {
    for (const post in postsData) {
        if (postsData[post].title == title) return postsData[post];
    }
}

function getPostByBodySize(bodySize: number) {
    for (const post in postsData)
        if (postsData[post].body.length < bodySize) return postsData[post];
}

export default {
    getPostsObject,
    getPostsData,
    getCommentsByPostId,
    getPostById,
    addPost,
    deletePostById,
    deleteCommentById,
    searchPostsByQuery,
}