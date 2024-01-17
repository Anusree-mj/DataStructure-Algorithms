// push in a stack
class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items.push(element);
        this.count++;
    }

    print() {
        console.log(this.items)
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();