const arr = [1,2,3,4,5,6,6,6];

function hasDuplicate(arr) {
    return new Set(arr)!=arr.length
}

console.log("Does the array have duplicate elements?: ", hasDuplicate(arr));