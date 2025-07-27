import validate from '../Utils/validate.js';
class Comment {

    constructor(id, text) {
        this.id = id;
        this.text = text;
    }

    set id(value) {
        validate.validateCommentId(value);
        this._id = value;
    }

    get id() {
        return this._id;
    }

    set text(value) {
        validate.validateCommentText(value);
        this._text = value;
    }

    get text() {
        return this._text;
    }
}

export default Comment;