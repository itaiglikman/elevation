/**
 * Exercise 3
Receive a value and parent parameter. We delete a node by removing it from its parent as a reference

This means you should change the parent's child to null
Look for the value, recursively calling the method on its right or left child, based on if the the value is greater than or less than the node

Once the node is found there are one of three scenarios:

If the node has no children, remove it as a reference from its parent
If the node has one child, make the child node the reference of the parent node, effectively removing the current node
If the node has two children, find the maximum value to the left of the node, replace that as the reference of the parent node, and remove the node you just moved
 */

class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }

    insertNode(newVal) {
        if (!this.value)
            this.value = newVal;
        else if (newVal > this.value && this.rightChild)
            this.rightChild.insertNode(newVal);
        else if (newVal <= this.value && this.leftChild)
            this.leftChild.insertNode(newVal);
        else if (newVal <= this.value)
            this.leftChild = new BSNode(newVal);
        else
            this.rightChild = new BSNode(newVal);
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

    removeNode(val, parent = this) {
        if (!this.value) return false;
        // remove the root of the tree
        if (this.value === val) {
            parent.value = this.removeMinNodeAndReturnValue(parent)
            return;
        }
        let rightChild = parent.rightChild;
        let leftChild = parent.leftChild;
        if (leftChild.value === val) {
            parent.leftChild = this.removeChild(leftChild);
            return;
        }
        else if (rightChild.value === val) {
            parent.rightChild = this.removeChild(rightChild);
            return;
        }
        if (val > this.value && this.rightChild)
            return this.rightChild.removeNode(val, this.rightChild);
        if (val <= this.value && this.leftChild)
            return this.leftChild.removeNode(val, this.leftChild);
        return false;
    }

    removeChild(node) {
        if (node.leftChild && node.rightChild) {
            node.value = this.removeMinNodeAndReturnValue(node.rightChild, node);
            return node;
        }
        else if (!node.leftChild && !node.rightChild)
            return null;
        return node.rightChild ? node.rightChild : node.leftChild;
    }

    removeMinNodeAndReturnValue(node, parent = this) {
        if (!node.leftChild) {
            const minValue = node.value;
            parent.leftChild = null;
            return minValue;
        }
        return this.removeMinNodeAndReturnValue(node.leftChild, node)
    }



}

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let node = new BSNode();
numbers.forEach(n => node.insertNode(n));
console.dir(node, { depth: null });
console.log('==============================');
node.removeNode(8)
console.dir(node, { depth: null });
