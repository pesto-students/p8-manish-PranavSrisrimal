const arr = [1,2];

function hasDuplicate(arr) {
    return [...new Set(arr)].length != arr.length
}

console.log("Does the array have duplicate elements?: ", hasDuplicate(arr));