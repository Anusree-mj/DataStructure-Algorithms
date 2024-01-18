// sort the given array

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const leftArr=arr.slice(0,mid);
    const rigthArr= arr.slice(mid);
    return merge(mergeSort(leftArr),mergeSort(rigthArr));
}
function merge(leftArr,rightArr){
    const sortdArr=[];
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <=rightArr[0]){
            sortdArr.push(leftArr.shift());
        }else{
            sortdArr.push(rightArr.shift());
        }
    }
    return [...sortdArr,...leftArr,...rightArr]
}
console.log(mergeSort([2,-9,6,1,-8,5,10]))