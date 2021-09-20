const arr = [1, 2, 3, 4, 5, 6];

function sumOfArrayElements(arr) {
    return arr.reduce((prev, curr, idx, obj) => (prev + curr), 0);
}

console.log(sumOfArrayElements(arr));

/*
Output:
21
*/