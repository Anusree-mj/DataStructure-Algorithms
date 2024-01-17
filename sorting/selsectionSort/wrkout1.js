/*Sort the given array in non-decreasing order */

function sortInAscendingOrder(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr
}

console.log(sortInAscendingOrder([-9, 10, 2, -6, 1, 9]))