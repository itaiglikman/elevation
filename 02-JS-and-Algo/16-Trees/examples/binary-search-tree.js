class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
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

}

const node = new BSNode();

node.insertNode('H')
node.insertNode('E');
node.insertNode('S')
node.insertNode('L')
node.insertNode('G')
node.insertNode('Y')
node.insertNode('I')

console.dir(node, { depth: null });

/**
 * BSNode {
  value: 'H',
  leftChild: BSNode { value: 'E', rightChild: BSNode { value: 'G' } },
  rightChild: BSNode {
    value: 'S',
    leftChild: BSNode { value: 'L', leftChild: BSNode { value: 'I' } },
    rightChild: BSNode { value: 'Y' }
  }
}
 */