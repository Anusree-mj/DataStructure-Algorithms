// count occurence of a given target from an array

// timeComplexity O(n)-linear;
// spzcecomplexity O(1)- constant;

function linearSearchCountOccurrence(arr, target) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }

    return count;
}

console.log(linearSearchCountOccurrence([2,3,2,4,6,2,7,2,12,2],2))