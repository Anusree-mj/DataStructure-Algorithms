// find the target elmnt in a given array and return its index;

// timeComplexity O(logn)-logarithmic;
// spzcecomplexity O(1)- constant;
function binarySearch(arr,target){
    let leftIndex =0;
    let rightIndex = arr.length-1;
    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(arr[middleIndex]===target){
            return middleIndex;
        }else if(arr[middleIndex] < target){
            leftIndex= middleIndex+1;
        }else{
            rightIndex = middleIndex-1;
        }
    }
    return -1;
}

console.log(binarySearch([2,4,6,10,16],16));