class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        this.items.shift()
    }

    peek(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return;
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items)
    }
}

const queue = new Queue;
queue.enqueue(9);
queue.enqueue(4);
queue.enqueue(1);
queue.print()
console.log("Peeked element is :",queue.peek());
queue.dequeue();
queue.print()