// removing an item from the heap(minHeap).

// minHeap implementation

class Heap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    hasParentIndex(index) {
        return this.getParentIndex(index) >= 0
    }

    getParent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    getLeftChildIndex(index) {
        return (2 * index + 1);
    }

    hasLeftChildIndex(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    getLeftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    getRightChildIndex(index) {
        return (2 * index + 2);
    }

    hasRightChildIndex(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    getRightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParentIndex(index) && this.getParent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        let item = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return item;
    }

    heapifyDown(){
     let index = 0;
     while(this.hasLeftChildIndex(index)){
        let smallestChildIndex= this.getLeftChildIndex(index);
        if(this.hasRightChildIndex(index) && this.getRightChild(index)<this.getLeftChild(index)){
            smallestChildIndex=this.getRightChildIndex(index);
        }

        if(this.heap[index]<this.heap[smallestChildIndex]){
            break;
        }else{
            this.swap(index,smallestChildIndex);
        }

        index=smallestChildIndex;
     }
    }

    print() {
        let output = '';
        for (let i = 0; i < this.heap.length; i++) {
            output += `${this.heap[i]} `;
        }

        console.log(output);
    }
}

const heap = new Heap();
heap.add(10);
heap.add(13);
heap.add(14);
heap.add(15);
heap.add(16);
heap.add(17);
heap.add(18);
heap.add(5);
heap.add(3);

heap.print();

console.log('Removed item :',heap.remove())
console.log("Heap after removing minimum item");
heap.print();




