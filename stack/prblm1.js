/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */

function isValid(str) {
    let stack = [];
    for (let item of str) {
        if (item === '(' || item === '{' || item === '[') {
            stack.push(item);
        } else {
            if (!stack.length || (item === ')' && stack[stack.length - 1] !== '(') ||
                (item === '}' && stack[stack.length - 1] !== '{') ||
                (item === ']' && stack[stack.length - 1] !== '[')){
                    return false;
                }
                stack.pop();
        }
    }
    return stack.length===0;
}

console.log(isValid('[}'))