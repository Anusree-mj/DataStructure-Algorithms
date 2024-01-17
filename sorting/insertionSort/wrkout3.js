/*Given an array of integers sorted in non-decreasing order, 
return an array of the squares of each number sorted in decreasing order.
Solve this problem using the Bubble Sort algorithm.*/

function sortedSquares(arr) {
    for(let i=0;i<arr.length-1;i++){
        arr[i]=arr[i]*arr[i];
    }
    for(let i=1;i<arr.length;i++){
        let numToInsert=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]<numToInsert){
            arr[j+1]=arr[j];
            j--
        }
        arr[j+1]=numToInsert;
    }
    return arr;
}
console.log(sortedSquares([-4,-1,0,3,10]))