// Check if the given element exists in a sorted array

// Time Complexity: O(log n) - logarithmic
// Space Complexity: O(1) - constant
function binarySearchCheckElement(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === arr[middleIndex]) {
            return true;
        } else if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return false;
}
console.log(binarySearchCheckElement([2, 4, 6, 8], 5));