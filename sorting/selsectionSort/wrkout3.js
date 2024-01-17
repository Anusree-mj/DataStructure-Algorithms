/*Given an array of integers sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.
Solve this problem using the Bubble Sort algorithm.*/

function sortedSquares(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i] * arr[i];
    }
    for(let i=1;i<arr.length-1;i++){
        let minIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>arr[minIndex]){
               minIndex=j;
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
    }
    return arr;
}
console.log(sortedSquares([7,1,8,-7,5]))