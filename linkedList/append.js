// add a node at the end
// time complexity O(n)
// space complexity O(1);
class Node {
    constructor(value){
        this.value = value;
        this.head= null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
        }

        isEmpty(){
            return this.size===0
        }

        getSize(){
            return this.size;
        }
        prepend(value){
            const node = new Node(value);
            if(this.isEmpty()){
                this.head = node;
            }else{
                node.next=this.head;
                this.head=node;
            }
            this.size++;
        }
        append(value){
            const node = new Node(value);
            if(this.isEmpty()){
                this.head= node;
            }else{
                let prev = this.head;
                while(prev.next){
                    prev=prev.next;
                }
                prev.next = node;
            }
            this.size++;
        }
        print(){
            if(this.isEmpty()){
                console.log("List is empty")
            }else{
                let curr = this.head;
                let listValues = '';
                while(curr){
                    listValues+= `${curr.value+" "}`
                    curr=curr.next;
                }
                console.log(listValues);
            }
        }
}

const list = new linkedList()
list.prepend(10);
list.prepend(20);
list.append(30);
list.append(40);
list.print();