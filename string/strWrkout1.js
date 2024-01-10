// Write a function characterCount that takes a string as input 
// and returns an object representing the count of each character in the string.
//  The keys of the object should be the unique characters in the string, 
//  and the values should be the count of each character.

function charechterCount(string) {
    let count = {};
    let str = string.split("");
    for (let i = 0; i < str.length; i++) {
        if (count[str[i]] >= 1) {
            count[str[i]]++;
        } else {
            count[str[i]] = 1;
        }
    }
    return count;
}

console.log(charechterCount("abbabbc"));