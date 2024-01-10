// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

// time complexity linear O(n)
// space complexity linear O(n)
var containsDuplicate = function (nums) {
    const uniqueNumArr = new Set();
    for (const num of nums) {
        if (uniqueNumArr.has(num)) {
            return true;
        } else {
            uniqueNumArr.add(num);
        }
    }
    return false;
};
console.log(containsDuplicate([1,2,3,1]))
