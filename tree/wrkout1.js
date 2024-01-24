// insert and search for a given value in tree

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

    search(root, target) {
        if (!root) {
            return false;
        }
        if (root.value === target) {
           return true;
        }

        for(const child of root.children){
            if(this.search(child,target)){
                return true;
            }
        }
        return false;
    }
}

const tree= new Tree();
tree.insert(5);
tree.insert(15);
tree.insert(25);
tree.insert(35);

console.log(tree.search(tree.root,35))