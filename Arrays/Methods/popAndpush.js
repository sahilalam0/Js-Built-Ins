const arr = [1, 2, 3, 4, 5, "Hello"];
const element = arr.pop();

console.log(element);
console.log(arr);
console.log(arr.push(element));
console.log(arr);

/*
Output:
Hello
[ 1, 2, 3, 4, 5 ]
6
[ 1, 2, 3, 4, 5, 'Hello' ]
*/