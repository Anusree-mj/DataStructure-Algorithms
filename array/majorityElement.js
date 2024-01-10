// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

// method-1 
// time complexity linear O(n);
// space complexity linear O(n);
var majorityElement = function(nums) {
    const numsMap=new Map();
    let element
    for(let num of nums){
        numsMap.set(num,(numsMap.get(num)||0)+1);
    }    
    for(let [num,count]of numsMap){
        if(count>nums.length/2){
            element= num;
        }
    }
    return element;
};

console.log(majorityElement([2,2,1,1,1,2,2]));

// method-2 Boyer-Moore Voting Algorithm
// time complexity linear O(n);
// space complexity linear O(n);
var majorityElement = function(nums) {
    let element;
    let count =0;
    for(let num of nums){
        if(count===0){
            element=num;
        }
        count+=(num===element)?1:-1;
    }
    return element;
 };
 
console.log(majorityElement([2,2,1,1,1,2,2])); 
