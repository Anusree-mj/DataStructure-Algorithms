class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
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
            this.head.previous = node;
            this.head = node;
        }
        this.size++;
    }
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }
        this.size++;
    }
    removeFromFront() {
        if (this.isEmpty()) {
            console.log('List is empty');
            return;
        } else {
            if (this.size === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.previous = null;
            }
        }
        this.size--;
    }
    removeFromEnd() {
        if (this.isEmpty()) {
            console.log('List is empty');
            return;
        } else {
            if (this.size === 1) {
                this.head = null;
                this.tail = null;
            } else {
               this.tail=this.tail.previous;
               this.tail.next=null;
            }
        }
        this.size--;
    }
    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += `${curr.value + ' '}`
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
    reverse(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr = this.tail;
            let reverseList='';
            while(curr){
                reverseList+=`${curr.value + " "}`;
                curr=curr.previous;
            }
            console.log(reverseList);
        }
    }
}

const list = new DoublyLinkedList();
list.prepend(10);
list.prepend(40);
list.print();
list.append(100);
list.print();
list.removeFromEnd();
list.print();
list.reverse();