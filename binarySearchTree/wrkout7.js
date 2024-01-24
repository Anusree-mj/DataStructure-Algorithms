// deleting a node in tree

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
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            }
            else {
                this.insertNode(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
// get to the value
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        }
        else {
            if (!root.left && !root.right) { /*if value is a leaf node this.isEmpty,no child node  */
                return null;
            }
            if (!root.left) {
                return root.right; /*if value doesnt have left child replace the parent with right child  */
            } else if (!root.right) {
                return root.left; /*if value doesnt have right child replace the parent with left child  */
            }
            // if have two child then replace the parent with the value of inorder successor 
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(11);
bst.insert(18);
bst.insert(3);
bst.insert(7);
bst.insert(18);
console.log('Traversing the tree in levelOrder: ');
bst.levelOrder()
bst.delete(1);

console.log('Traversing the tree in levelOrder: ');
bst.levelOrder()
console.log("root:",bst.root)