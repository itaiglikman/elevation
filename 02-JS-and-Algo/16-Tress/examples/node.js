class Node {
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
    insertLeft(value) {
        if (!this.leftChild) {
            this.leftChild = new Node(value);
        } else {
            let newNode = new Node(value);
            newNode.leftChild = this.leftChild;
            this.leftChild = newNode
        }
    }

    insertRight(value) {
        if (!this.rightChild) {
            this.rightChild = new Node(value);
        } else {
            let newNode = new Node(value);
            newNode.rightChild = this.rightChild;
            this.rightChild = newNode
        }
    }
}

const H = new Node('H');
H.insertLeft('E');
H.leftChild.insertLeft('G')
H.rightChild = new Node('S');
H.rightChild.insertLeft('L');
H.rightChild.leftChild.insertLeft('I')
let I = H.rightChild.leftChild.leftChild
I.insertRight("A");
H.rightChild.insertRight('Y');
console.dir(H, { depth: null })
//prints:

// Node {
//   value: 'H',
//   leftChild: Node {
//      value: 'E',
//      leftChild: null,
//      rightChild: Node { value: 'G', leftChild: null, rightChild: null } 
//    },
//   rightChild: Node {
//      value: 'S',
//      leftChild: Node { value: 'L', leftChild: [Node], rightChild: null },
//      rightChild: Node { value: 'Y', leftChild: null, rightChild: null } 
//   } 
// }

