// deletion for a given value in tree

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(value) {
        const childNode = new TreeNode(value);
        this.children.push(childNode);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const node = new TreeNode(value);
        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(parent, newNode) {
        parent.children.push(newNode);
    }
    delete(value) {
        if (this.isEmpty()) {
            console.log("Tree is empty. Nothing to delete.");
            return;
        }

        if (this.root.value === value) {
            if (this.root.children.length === 1) {
                // If the root has only one child, reassign the root to that child
                this.root = this.root.children[0];
            } else {
                // If the root has multiple children or no children, remove the root
                this.root = null;
            }
        } else {
            this.root = this.deleteNode(this.root, value);
        }
    }

    deleteNode(root, value) {
        root.children = root.children.filter(child => child.value !== value);

        for (const child of root.children) {
            this.deleteNode(child, value);
        }

        return root;
    }

    levelOrder() {
        if (!this.root) {
            console.log("Tree is empty.");
            return;
        }

        const queue = [this.root];

        while (queue.length > 0) {
            const currentNode = queue.shift();
            console.log(currentNode.value);

            for (const child of currentNode.children) {
                queue.push(child);
            }
        }
    }
}

const tree = new Tree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
console.log("Tree in levelOrder:")
tree.levelOrder();

tree.delete(20)
console.log("Tree in levelOrder:")
tree.levelOrder();
