// check if a string is pallindrome or not
function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    if (cleanStr === cleanStr.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("A man, a plan, a canal, Panama"));  
