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
    getSize(){
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
    removeByValue(value) {
      let removeNode;
      if(this.isEmpty()){
        console.log("List is empty");
      }else if(this.head.value===value){
        removeNode=this.head;
        this.head=this.head.next;
      }else{
        let prev = this.head;
        while(prev.next && prev.next.value !==value){
            prev=prev.next;
        }
        if(prev.next){
            removeNode = prev.next;
            prev.next = removeNode.next;
        }else{
            console.log('Value not found')
            return;
        }
      }
      this.size--;
      console.log('Removed node:',removeNode)
      return;
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
list.prepend(40);
list.print();
console.log('Size of the list before removing node',list.getSize());
list.removeByValue(0);
list.print();
console.log('Size of the list after removing node',list.getSize())