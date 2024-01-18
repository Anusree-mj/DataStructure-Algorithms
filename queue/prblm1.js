// implement stack using queue
var MyStack = function () {
    this.stack = [];
    this.count = 0;
 };
 
 
 /**
 * @param {number} x
 * @return {void}
 */
 MyStack.prototype.push = function (x) {
    this.stack.push(x);
    this.count++;
 };
 
 
 /**
 * @return {number}
 */
 MyStack.prototype.pop = function () {
    if (this.count === 0) {
        return "Stack is empty";
    }
    this.count--;
    return this.stack.pop()
 };
 
 
 /**
 * @return {number}
 */
 MyStack.prototype.top = function () {
    if (this.count === 0) {
        return "Stack is empty";
    }
    return this.stack[this.count - 1]
 };
 
 
 /**
 * @return {boolean}
 */
 MyStack.prototype.empty = function () {
  return this.count===0;
 };
 
 
 /**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
 
 