//reverse a string

let reverseString = (str) => {
    let charArray = str.split('');
    let s = 0;
    let e = charArray.length - 1;
    while (s < e) {
        let temp = charArray[s];
        charArray[s] = charArray[e];
        charArray[e] = temp;
        s++;
        e--;
    }
    return charArray.join('');
}

console.log(reverseString("hello world"));
