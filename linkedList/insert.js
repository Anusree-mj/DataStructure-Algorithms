// add a node at the beginning
// time complexity O(n)
// space complexity O(1);
class Node {
    constructor(value) {
        this.value = value;
        this.head = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0
    }
    
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log('Invalid index');
            return;
        } if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node; 
            this.size++;
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty")
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += `${curr.value + " "}`
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
}

const list = new linkedList()
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.insert(25, 2)
list.print();