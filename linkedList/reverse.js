// add a node at the beginning
// time complexity O(n)
// space complexity O(1);
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
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

    getSize() {
        return this.size;
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
    reverse(){
        let prev=null;
        let curr = this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev=curr;
            curr = next;
        }
        this.head=prev;
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
list.reverse();
console.log('Reversed list :')
list.print();