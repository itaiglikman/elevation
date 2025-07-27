import validate from '../Utils/validate.js';
class Post {

    constructor(id, text) {
        this.text = text;
        this.id = id;
        this.comments = [];
    }

    set id(value) {
        validate.validatePostId(value);
        this._id = value;
    }

    get id() {
        return this._id;
    }

    set text(value) {
        validate.validatePostText(value);
        this._text = value;
    }

    get text() {
        return this._text;
    }

    addComment(comment) {
        try {
            this.comments.push(comment);
        } catch (error) {
            console.error(error.message);
            // throw new Error(error);
            throw error;
        }
    }

    removeComment(commentId) {
        try {
            const commentIndex = this.#checkCommentExists(commentId);
            this.comments.splice(commentIndex, 1);
            console.log(`post ${commentIndex} removed`);
        } catch (error) {
            console.error(error.message);
            // throw new Error(error)
            throw error;
        }
    }

    #checkCommentExists(commentId) {
        validate.validateCommentId(commentId);
        const index = this.comments.findIndex(c => c.id === commentId);
        if (index === -1) throw (`comment ${commentId} not found`);
        return index;
    }
}

export default Post;