// pop in stack
class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }


    push(element) {
        this.items.push(element);
        this.count++;
    }

    pop() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
            return;
        }
        this.items.pop();
        this.count--;
        return;
    }

    isEmpty() {
        return this.count === 0;
    }
    print() {
        if(this.isEmpty()){
            console.log('Stack is empty');

            return;
        }
        console.log(this.items);
        return;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.pop();

stack.print();