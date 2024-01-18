/*Find the kth largest element. Given an array and an integer k, 
write a function to find the kth largest element and return */

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    let sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] >= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return ([...sortedArr, ...leftArr, ...rightArr]);
}
function findKthLargerElement(arr, k) {
   return arr[k-1]   
}
const sortedArr=mergeSort([-6,8,3,0,-1],);
console.log(findKthLargerElement(sortedArr,3));