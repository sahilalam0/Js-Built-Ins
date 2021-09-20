const arr = [1, 2, "Hello", "World", 3, 7, "!!"];

console.log(arr.splice(2, 2));
console.log(arr);
console.log(arr.splice(3, 0, 4, 5, 6));
console.log(arr);
console.log(arr.splice(arr.length - 1, 1, 8));
console.log(arr);

/*
Output:

[ 'Hello', 'World' ]
[ 1, 2, 3, 7, '!!' ]

[]
[
  1, 2, 3, 4,
  5, 6, 7, '!!'
]

[ '!!' ]
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
*/