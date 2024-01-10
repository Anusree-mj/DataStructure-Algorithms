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
    print() {
     if(this.isEmpty()){
        console.log("List is empty.");
     }else{
        let curr = this.head;
        let linkedListValues='';
        while(curr){
            linkedListValues += `${curr.value + ' '}`;
            curr = curr.next;
        }
        console.log(linkedListValues)
     }
    }

}
const list = new LinkedList();
list.prepend(10);
list.print();
list.prepend(20);
list.prepend(30);
list.print();
