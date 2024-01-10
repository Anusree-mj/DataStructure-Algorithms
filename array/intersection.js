// Given two integer arrays nums1 and nums2, 
// return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.


function intersection(nums1, nums2) {
    const uniqueNums1= new Set (nums1);
    const uniqueNums2= new Set(nums2);
    const intersectionArr=[];
    for(let uniqueNums of uniqueNums2){
        if(uniqueNums1.has (uniqueNums)){
            intersectionArr.push (uniqueNums)
        }
    }
    return intersectionArr
};
console.log(intersection([1,2,2,1,3,4,3],[2,2,3]))