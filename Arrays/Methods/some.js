const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.some((x) => (x > 6)));
console.log(arr.some((x) => (x > 7)));

/*
Output:
true
false
*/