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

    closest(target) {
        if (!this.root) {
            return null;
        }
        return this.findClosest(this.root, target,  Number.MAX_SAFE_INTEGER);
    }

    findClosest(root, target, closestValue) {
        if (!root) {
            return closestValue;
        }
        if (Math.abs(target - root.value) < Math.abs(target - closestValue)) {
            closestValue = root.value;
        }
            closestValue = this.findClosest(root.left, target, closestValue);
            closestValue = this.findClosest(root.right, target, closestValue)
       
        return closestValue;
    }
}
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(15);

console.log("The minimum node is: ", bst.closest(18));

