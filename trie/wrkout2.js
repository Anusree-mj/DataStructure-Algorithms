// search in trie

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

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }

        return node.isEndOftheWord;
    }

    startWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

const trie = new Trie();
trie.insert("app");
trie.insert("apple");
trie.insert("apricot");

console.log('Is Word:',trie.search('hello'));
console.log('Is Word:',trie.search('app'));
console.log('Is Prefix:',trie.startWith('H'));
console.log('Is Prefix:',trie.startWith('ap'));

