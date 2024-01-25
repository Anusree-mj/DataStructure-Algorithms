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

    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    heapifyUp(){
        let index=this.heap.length-1;
        while(this.hasParentIndex(index) && this.getParent(index) > this.heap[index]){
            this.swap(this.getParentIndex(index),index);
            index = this.getParentIndex(index);
        }
    }

    print(){
        let output='';
        for(let i =0;i<this.heap.length;i++){
            output+=`${this.heap[i]} `;
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


heap.print();
