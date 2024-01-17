/* Find the kth element.
   Given an array and an integer k, 
   write a function to find the kth element. */

function findKthElement(arr, k) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr[k-1]
}
console.log(findKthElement([3,1,4,2,5],3))