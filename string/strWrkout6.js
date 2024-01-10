// remove duplicates from a string

function removeDuplicates(str) {
    let uniqueChars = '';
    
    for (let char of str) {
        if (!uniqueChars.includes(char)) {
            uniqueChars += char;
        }
    }

    return uniqueChars;
}

console.log(removeDuplicates("leetcode"));  
