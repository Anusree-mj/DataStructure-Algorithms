class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOftheWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }

            node = node.children[char];
        }
        node.isEndOftheWord = true;
    }

    delete(word) {
        this._deleteHelper(this.root, word, 0);
    }

    _deleteHelper(node, word, index) {
        if (index === word.length) {
            // If we have reached the end of the word, mark isEndOftheWord as false
            if (node.isEndOftheWord) {
                node.isEndOftheWord = false;
            }
            return;
        }

        const char = word[index];
        const childNode = node.children[char];

        if (!childNode) {
            // If the character does not exist, the word is not in the Trie
            return;
        }

        // Recursively call the delete helper for the next character
        this._deleteHelper(childNode, word, index + 1);

        // If the child node has no other children and is not the end of a word, delete it
        if (Object.keys(childNode.children).length === 0 && !childNode.isEndOftheWord) {
            delete node.children[char];
        }
    }

    display() {
        this._displayNode(this.root, "");
    }

    _displayNode(node, word) {
        if (node.isEndOftheWord) {
            console.log(word);
        }

        for (const [char, childNode] of Object.entries(node.children)) {
            this._displayNode(childNode, word + char);
        }
    }
}

const trie = new Trie();
trie.insert("app");
trie.insert("apple");
trie.insert("apricot");

console.log('Trie before deletion:');
trie.display();

trie.delete("app");
console.log('\nTrie after deletion:');
trie.display();
