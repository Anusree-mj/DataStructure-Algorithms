// sort an array in ascending order

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let left = [];
    let right = [];
    let pivot = arr[arr.length-1];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
console.log(quickSort([-1, 10, 6, 1, -8]))