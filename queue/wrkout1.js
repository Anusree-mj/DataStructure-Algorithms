class Queue{
    constructor(){
        this.items=[];
    }

    enqueue(element){
        this.items.push(element);
    }

    isEmpty(){
        return this.items.length===0;
    }

    print(){
        console.log(this.items)
    }
}

const queue = new Queue;
queue.enqueue(9);
queue.enqueue(4);
queue.enqueue(1);
queue.print()