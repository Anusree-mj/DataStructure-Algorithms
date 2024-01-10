// Given a string s, find the first non-repeating character in it 
// and return its index. If it does not exist, return -1.

// method 1
// timecomplexity quadratic => O(n2);
// spacecomplexity constant => O(1);
var firstUniqChar = function(s) {
    for(let i=0;i<s.length;i++){
        if(s.indexOf(s[i])===s.lastIndexOf(s[i])){
            return s.indexOf(s[i]);
        }
    } 
    return -1;
 };
 console.log(firstUniqChar("loveleetcode"))

//  method 2
// timecomplexity linear => O(n);
// spacecomplexity linear => O(n);
var firstUniqChar = function(s) {
    const countMap=new Map();
    for(let i=0;i<s.length;i++){
        countMap.set(s[i],(countMap.get(s[i])|| 0)+1)
    }
    for(let i=0;i<s.length;i++){
        if(countMap.get(s[i])===1){
            return i;
        }
    }
    return -1;
 };
 console.log(firstUniqChar("loveleetcode"))