// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.
// You can return the answer in any order.

// time complexity linear=> O(n);
// space complexity linear=> O(n)
var twoSum = function (nums, target) {
    let numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
      let expctdNum=target-nums[i];
      if(numsMap.has(expctdNum)){
        return [i,numsMap.get(expctdNum)];
      }else{
        numsMap.set(nums[i],i)
      }
    }
};
console.log(twoSum([2, 7, 11, 15]));