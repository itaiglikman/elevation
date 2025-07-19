/**
 * Exercise 1
FINDING A NODE
Lets write a findNode method for our class
that receives a value parameter and returns true or false if that value exists in your tree.
You'll need to write this function recursively, similar to the insertNode function

Test your method with the same array from before: const letters = ["H", "E", "S", "G", "L", "Y", "I"]
 */

class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if (newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findNode(letter) {
        if (!this.value) return false;
        if (this.value === letter) return true;
        if (letter > this.value && this.rightChild)
            return this.rightChild.findNode(letter);
        if (letter <= this.value && this.leftChild)
            return this.leftChild.findNode(letter);
        return false;
    }

}

const bsTree = new BSNode();
const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]

letters.forEach(l => bsTree.insertNode(l));

console.dir(bsTree, { depth: null });

