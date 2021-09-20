const arr = ["Hello", 1, 2, 3, 4, 5, 6, 7];
const element = arr.shift();

console.log(element);
console.log(arr.unshift(-1, 0));
console.log(arr);

/*
Output:

Hello
9
[
  -1, 0, 1, 2, 3,
   4, 5, 6, 7
]
*/