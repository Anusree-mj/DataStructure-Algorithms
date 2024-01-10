// add a node at the beginning
// time complexity O(1)
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
    search(value){
        if(this.isEmpty()){
            return -1;
        }
        let i=0;
        let curr = this.head;
        while(curr){
            if(curr.value===value){
                return i;
            }
            curr=curr.next;
            i++;
        }
        return -1;
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
console.log('Value found at index :',list.search(10))
list.print();