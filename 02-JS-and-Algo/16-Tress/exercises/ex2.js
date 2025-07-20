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

    /**
     * 
Write a findCommonParent method for you class that takes two values
 that are definitely in your tree, and returns the closest common parent the two nodes have.
Test your findCommonParent method for a BS tree made made from the following
 array: ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]} letter 
     */
    getNodePath(letter, path = []) {
        if (!this.value) return [];
        path.push(this.value)
        if (this.value === letter) return path;
        if (letter > this.value && this.rightChild) {
            return this.rightChild.getNodePath(letter, path);
        }
        if (letter <= this.value && this.leftChild) {
            return this.leftChild.getNodePath(letter, path);
        }
        return [];
    }

    // findCommonParent(letter1, letter2) {
    //     const nodePath1 = this.getNodePath(letter1);
    //     const nodePath2 = this.getNodePath(letter2);
    //     let counter = 0;
    //     while (counter < nodePath1.length && counter < nodePath2.length && nodePath1[counter] === nodePath2[counter]) {
    //         console.log(nodePath2[counter]);
    //         counter++;
    //     }
    //     if (nodePath1[counter] === letter1 || nodePath2 === letter2)
    //         counter--;

    //     return nodePath2[--counter];

    // }

    findCommonParent(letter1, letter2) {
    let current = this;
    let parent = null;
    while (current) {
        if (letter1 < current.value && letter2 < current.value) {
            parent = current;
            current = current.leftChild;
        } else if (letter1 > current.value && letter2 > current.value) {
            parent = current;
            current = current.rightChild;
        } else {
            // If current.value is one of the letters, return parent
            if (current.value === letter1 || current.value === letter2) {
                return parent ? parent.value : null;
            }
            return current.value;
        }
    }
    return null;
}

}

const bsTree = new BSNode();
const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]

letters.forEach(l => bsTree.insertNode(l));

// console.dir(bsTree, { depth: null });

console.log(bsTree.findCommonParent("B", "I")); //should return "H"
console.log(bsTree.findCommonParent("B", "G")); //should return "E"
console.log(bsTree.findCommonParent("B", "L")); //should return "J"
console.log(bsTree.findCommonParent("L", "Y")); //should return "R"
console.log(bsTree.findCommonParent("E", "H")); //should return "J"

