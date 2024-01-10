// check if the given  element exists

// timeComplexity O(n)-linear;
// spzcecomplexity O(1)- constant;
function checkElement(arr,target){
for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
        return true;
    }
}
return false;
}

console.log(checkElement([2,4,6,8],4))