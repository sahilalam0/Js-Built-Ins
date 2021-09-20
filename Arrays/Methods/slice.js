const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.slice(1));
console.log(arr.slice((-1 * arr.length), ((-1 * arr.length) + 3)))
console.log(arr.slice(3, arr.length));

/*
Output:
[ 2, 3, 4, 5, 6 ]
[ 1, 2, 3 ]
[ 4, 5, 6 ]
*/