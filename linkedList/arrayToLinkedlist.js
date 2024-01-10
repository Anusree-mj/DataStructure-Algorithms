// add a node at the end
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
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
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
// converting array to linked list
const arr=[12,26,10,1]
for(let i =0; i<arr.length;i++){
    list.append(arr[i])
}

list.print();