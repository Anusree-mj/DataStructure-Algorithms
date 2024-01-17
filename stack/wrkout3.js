class Stack{
    constructor(){
        this.items=[];
        this.count=0;
    }

    push(element){
        this.items.push(element);
        this.count++;
    }
    isEmpty(){
        return this.count===0;
    }
    peek(){
        if(this.isEmpty()){
            console.log('stack is empty');
            return;
        }
        let element = this.items[this.count - 1];
        return element
    }
       
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek())

