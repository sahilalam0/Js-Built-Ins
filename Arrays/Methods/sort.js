const arr = [1, 3, 2, 5, 7, 6, 0];

console.log(arr.sort());
console.log(arr.sort((a, b) => (b - a)));

/*
Output:
[
  0, 1, 2, 3,
  5, 6, 7
]

[
  7, 6, 5, 3,
  2, 1, 0
]
*/