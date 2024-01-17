//find the sum of an array using recursion.

function sumArray(arr) {
    if (arr.length === 0) {
        return 0; 
    }
    return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([12,14,16,18,20]))