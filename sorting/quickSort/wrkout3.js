/*Given an array of integers sorted in non-decreasing order, 
return an array of the squares of each number sorted in decreasing order.
Solve this problem using the Bubble Sort algorithm.*/

function squareArr(arr) {
    for(let i=0;i <arr.length; i++){
        arr[i]=arr[i]*arr[i];
    }
    return quickSortArr(arr);
}
function quickSortArr(arr){
    if(arr.length<=1){
        return arr;
    }
    let left=[];
    let right=[];
    let pivot=arr[arr.length-1];
    for(let i=0; i< arr.length-1;i++){
        if(arr[i]>pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSortArr(left).concat(pivot,quickSortArr(right));
}
console.log(squareArr([-4,-1,0,3,10]))