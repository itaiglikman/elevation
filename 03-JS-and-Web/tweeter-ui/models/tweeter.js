import tweeterUtils from "../Utils/tweeterUtils.js";

class Tweeter {

    #posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't worry second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];

    #postIdCounter = this.#posts.length + 1;
    #commentIdCounter = this.#posts.reduce((sum, post) => {
        return sum += post.comments.length;
    }, 0);

    constructor() {
        // this.posts = [];

    }

    getPosts() {
        return this.#posts;
    }

    addPost(text) {
        try {
            const post = tweeterUtils.createNewPostObj(this.#postIdCounter, text);
            this.#posts.push(post);
            this.#postIdCounter++;
            return post;
        } catch (error) {
            throw error;
        }
    }

    removePost(postId) {
        try {
            const postIndex = tweeterUtils.validateAndFindPost(postId, this.#posts);
            this.#posts.splice(postIndex, 1);
            console.log(`post ${postIndex} removed`);
        } catch (error) {
            throw error;
        }
    }

    addComment(postId, text) {
        try {
            const postIndex = tweeterUtils.validateAndFindPost(postId, this.#posts);
            const comment = tweeterUtils.createNewCommentObj(this.#commentIdCounter, text);
            this.#posts[postIndex].comments.push(comment);
            this.#commentIdCounter++;
            return comment;
        } catch (error) {
            throw error;
        }
    }

    removeComment(postId, commentId) {
        try {
            const postIndex = tweeterUtils.validateAndFindPost(postId, this.#posts);
            const post = this.#posts[postIndex];
            const comments = post.comments;
            const commentIndex = tweeterUtils.validateAndFindComment(commentId, comments);
            comments.splice(commentIndex, 1);
            console.log(`comment ${commentId} removed`);
        } catch (error) {
            throw error;
        }
    }
}

export default Tweeter;
