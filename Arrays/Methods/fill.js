const arr = [];
arr.length = 5;

arr.fill(0);
console.log(arr);

arr.fill(1, 1, 2);
console.log(arr);

arr.fill(2, 2, 4);
console.log(arr);

arr.fill(3, -1);
console.log(arr);

/*

Output:
[ 0, 0, 0, 0, 0 ]
[ 0, 1, 0, 0, 0 ]
[ 0, 1, 2, 2, 0 ]
[ 0, 1, 2, 2, 3 ]

*/