// Design a stack that supports increment operations.Leetcode Question: 1381
/**
* @param {number} maxSize
*/
var CustomStack = function (maxSize) {
    this.stack = [];
    this.maxsize = maxSize;
    this.front = 0;
 };
 
 
 /**
 * @param {number} x
 * @return {void}
 */
 CustomStack.prototype.push = function (x) {
    if (this.front !== this.maxsize) {
        this.stack.push(x);
        this.front++;
    }
 };
 
 
 /**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    if (this.front !== 0) {
        let item = this.stack.pop();
        this.front--;
        return item;
    }
    return -1;
 };
 
 
 /**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
 CustomStack.prototype.increment = function (k, val) {  
        for (let i = 0;i< Math.min(k, this.front); i++) {
            this.stack[i] += val
        } 
 };
 
 
 /**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
 
 