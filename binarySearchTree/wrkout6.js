// check is binary tree;

// Find the closest value to a given number in a Tree.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if (node.value <= root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    isBST() {
        if (this.isEmpty()) {
            return true; 
        }
        return this.checkIsBST(this.root);
    }
    

    checkIsBST(root, minValue = Number.MIN_SAFE_INTEGER, maxValue = Number.MAX_SAFE_INTEGER) {
        if (root === null) {
            return true;
        }
    
        if (root.value <= minValue || root.value >= maxValue) {
            return false;
        }
    
        return (
            this.checkIsBST(root.left, minValue, root.value) &&
            this.checkIsBST(root.right, root.value, maxValue)
        );
    }
    
}
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(3);
bst.insert(1);
bst.insert(15);

console.log("Is BST: ", bst.isBST());

