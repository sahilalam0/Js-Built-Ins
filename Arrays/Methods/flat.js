const arr = [1, 2, [3, 4, [5, 6, [7]]], , 8];

console.log(arr.flat());
console.log(arr.flat(1));
console.log(arr.flat(2));
console.log(arr.flat(Infinity));

/**
Output:
[ 1, 2, 3, 4, [ 5, 6, [ 7 ] ], 8 ]
[ 1, 2, 3, 4, [ 5, 6, [ 7 ] ], 8 ]
[
  1,     2, 3,
  4,     5, 6,
  [ 7 ], 8
]
[
  1, 2, 3, 4,
  5, 6, 7, 8
]

*/