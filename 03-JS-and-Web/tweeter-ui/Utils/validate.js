// post-------------------
function validatePostId(id) {
    if (typeof id !== 'string' || !/^p\d+$/.test(id)) {
        throw ('Post id must start with "p" followed by a number.');
    }
}

function validatePostText(value) {
    if (typeof value !== 'string' || value.trim().length === 0) {
        throw ('Post text must be a non-empty string.');
    }
    if (value.length > 280) {
        throw ('Post text cannot exceed 280 characters.');
    }
    if (5 > value.length) {
        throw ('Post text cannot be less than 5 characters.');
    }
}

function validateCommentId(id) {
    if (typeof id !== 'string' || !/^c\d+$/.test(id)) {
        throw ('Comment id must start with "c" followed by a number.');
    }
}

// comment-------------------
function validateCommentText(value) {
    if (typeof value !== 'string' || value.trim().length === 0) {
        throw ('Comment text must be a non-empty string.');
    }
    if (value.length > 280) {
        throw ('Comment text cannot exceed 280 characters.');
    }
    if (value.length < 1) {
        throw ('Comment text must be at least 1 character.');
    }
}

function cleanStr(str) {
    return str.toLowerCase().trim();
}

export default {
    validatePostId,
    validatePostText,
    validateCommentId,
    validateCommentText,
    cleanStr
};