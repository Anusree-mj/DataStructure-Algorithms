// traversing tree

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(value) {
        const childNode = new TreeNode(value);
        this.children.push(childNode)
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
        }
        else {
            this.insertChildNode(this.root, node)
        }
    }

    insertChildNode(root, node) {
        root.children.push(node);
    }

    postOrder(root) {
        if (!this.isEmpty()) {
            if (root) {
                for (const child of root.children) {
                    this.postOrder(child)
                }
            }
            console.log(root.value)
        }
    }

    preOrder(root) {
        if (!this.isEmpty()) {
            if (root) {
                console.log(root.value)
            }

            for (const child of root.children) {
                this.preOrder(child)
            }
        }
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

    console.log("Tree in postOrder:")
    tree.postOrder(tree.root);

    console.log("Tree in preOrder:")
    tree.preOrder(tree.root);

    console.log("Tree in levelOrder:")
    tree.levelOrder();
