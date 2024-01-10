// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, return the index where it would be 
// if it were inserted in order. 
// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
    let index = nums.length;
     for (let i = 0; i < nums.length; i++) {
         if (nums[i] === target || nums[i] > target) {
             index = i;
             break;
         }
     }
     return index;
 };
 console.log(searchInsert([1, 3, 5, 6], 5));