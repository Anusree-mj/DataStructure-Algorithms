class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size;
    }
    // time complexity O(1);
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    // time complexity O(1);
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    // time complexity O(1);
    removeFromFront() {
        if (this.isEmpty()) {
            console.log('List empty');
            return;
        } else {
            const removedNodeValue = this.head.value;
            this.head = this.head.next;
            this.size--;
            console.log('Removed node value is :', removedNodeValue)
            return;
        }
    }
    // time complexity O(n);
    removeFromEnd() {
        if (this.isEmpty()) {
            console.log('List empty');
            return;
        } else {
            const removedNodeValue = this.tail;
            if (this.size === 1) {
                this.head = null;
                this.tail = null;
            } else {
                let prev = this.head;
                while (prev.next !== this.tail) {
                    prev = prev.next;
                }
                prev.next = null;
                this.tail = prev;
            }
            this.size--;
            console.log('Removed node value is :', removedNodeValue)
            return;
        }
    }
    print() {
        if (this.isEmpty()) {
            console.log("List is empty.");
        } else {
            let curr = this.head;
            let linkedListValues = '';
            while (curr) {
                linkedListValues += `${curr.value + ' '}`;
                curr = curr.next;
            }
            console.log(linkedListValues)
        }
    }

}
const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.print();

list.append(100);
list.print();

list.removeFromFront();
list.print();

list.removeFromEnd();
list.print();

console.log('list size is:', list.getSize())