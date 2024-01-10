// find the target elmnt in a given array and return its index;

// timeComplexity O(n)-linear;
// spzcecomplexity O(1)- constant;
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([2, 4, 6, 10, 16], 16));
