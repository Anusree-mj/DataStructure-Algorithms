// insertion in trie

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

    display(){
        this._displayNode(this.root,"");
    }

    _displayNode(node,word){
        if(node.isEndOftheWord){
            console.log(word);
        }

        for(const child in node.children){
            this._displayNode(node.children[child],word+child);
        }
    }
}

const trie = new Trie();
trie.insert("app");
trie.insert("apple");
trie.insert("apricot");

trie.display();