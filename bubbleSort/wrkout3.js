/*Given an array of integers sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.
Solve this problem using the Bubble Sort algorithm.*/

function sortedSquares(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i] * arr[i];
    }
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
console.log(sortedSquares([-4,-1,0,3,10]))