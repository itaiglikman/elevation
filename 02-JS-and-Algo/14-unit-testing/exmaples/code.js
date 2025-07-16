function calculateHyp(n1, n2) {
    return Math.sqrt(n1 * n1 + n2 * n2);
}

function clearLowPriority(arr) {
    return arr.filter(obj => obj.priority === "HIGH");
}

class PictureManager {
    constructor() {
        this.pictureURLs = []
    }

    addPicture(picURL) {
        this.pictureURLs.push(picURL)
    }

    removePicture(picURL) {
        this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1)
    }
}

class ArrayManipulator {
    constructor(arr1, arr2) {
        this.arr1 = arr1;
        this.arr2 = arr2;
    }

    manipulate() {
        if (this.arr1.length !== this.arr2.length)
            return 'the arrays must be in the same length';
        let obj = {};
        for (let i = 0; i < this.arr1.length; i++) {
            obj[this.arr1[i]] = this.arr2[i];
        }
        return obj;
    }

}

module.exports = {
    calculateHyp,
    clearLowPriority,
    PictureManager,
    ArrayManipulator
}

