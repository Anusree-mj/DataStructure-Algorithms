/* Find the kth larger element.
   Given an array and an integer k, 
   write a function to find the kth larger element. */

function findKthLargerElement(arr, k) {
    if (arr.length <= 1) {
        return arr;
    }
    let left = [];
    let right = [];
    let pivot = arr[arr.length - 1];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    if (k === left.length + 1) {
        return pivot;
    } else if (k <= left.length) {
        return findKthLargerElement(left, k);
    } else {
        return findKthLargerElement(right, k - left.length - 1)
    }
}
console.log(findKthLargerElement([-2, 6, 7, 1, 4, 3, 9], 6))