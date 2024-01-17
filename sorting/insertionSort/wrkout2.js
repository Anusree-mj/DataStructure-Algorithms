/* Find the kth larger element.
   Given an array and an integer k, 
   write a function to find the kth larger element. */

function findKthElement(arr, k) {
    for (let i = 1; i < arr.length; i++) {
        let numToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] < numToInsert) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = numToInsert;
    }
    return arr[k - 1]
}
console.log(findKthElement([-2, 6, 7, 1, 4, 3,9], 3))