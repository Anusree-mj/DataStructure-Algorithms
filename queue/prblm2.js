// Implement Queue using Stack

var MyQueue = function () {
    this.items = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.items.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (!this.empty()) {
        return this.items.shift();
    }
    return 'Queue is empty'
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
 if (!this.empty()) {
     return this.items[0];
 }
     return 'Queue is empty'
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    if (this.items.length === 0) {
        return true;
    }
    return false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */