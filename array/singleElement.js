// Given a non-empty array of integers nums, every element appears twice except for one. 
// Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// method-1 for every single element irrespective of other elements count
// time complexity linear O(n);
// space complexity linear O(n);
var singleNumber = function (nums) {
    let countMap = new Map();
    let singleElmnt;
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    for (let [num, count] of countMap) {
        if (count === 1) {
            singleElmnt = num;
        }
    }
    return singleElmnt
};
console.log(singleNumber([2, 2, 1]))

// method-2 if  every element appears twice except for one
// xor mehtod
// time complexity linear O(n);
// space complexity constant O(1);
var singleNumber = function (nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
}
console.log(singleNumber([2, 2, 1]))
