// Find the min stack. Leetcode qn:155

var MinStack = function () {
    this.stack = [];
    this.count = 0;
 };
 
 
 /**
 * @param {number} val
 * @return {void}
 */
 MinStack.prototype.push = function (val) {
    this.stack.push(val);
    this.count++;
 };
 
 
 /**
 * @return {void}
 */
 MinStack.prototype.pop = function () {
    if (this.count === 0) {
        return 'Empty Stack'
    }
    this.count--;
    return this.stack.pop();
 };
 
 
 /**
 * @return {number}
 */
 MinStack.prototype.top = function () {
    if (this.count === 0) {
        return "Stack is empty";
    }
    return this.stack[this.count - 1];
 };
 
 
 /**
 * @return {number}
 */
 MinStack.prototype.getMin = function () {
    let min = this.stack[0];
    for (let i = 1; i < this.stack.length; i++) {
        if (this.stack[i] < min) {
            min = this.stack[i];
        }
    }
    return min;
 };
 
 
 /**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
 
 