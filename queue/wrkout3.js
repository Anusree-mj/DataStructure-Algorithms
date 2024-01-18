class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    isEmpty() {
        return this.front - this.rear === 0
    }

    peek() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
            return;
        }
        return this.items[this.front];

    }

    print(){
    console.log(this.items);
    }

}

const queue = new Queue;
queue.enqueue(5);
queue.enqueue(9);
queue.enqueue(4);
queue.enqueue(1);
queue.print()
console.log("Removed element: ",queue.dequeue());
console.log("Peeked element is :",queue.peek());
queue.print()
