/* Find the kth largerst element.
   Given an array and an integer k, 
   write a function to find the kth larger element. */

   function findKthElement(arr, k) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex=i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] >arr[minIndex]) {
               minIndex=j;
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
    }
    return arr[k-1]
}
console.log(findKthElement([15,-2,6,1,0,1,-4],2))