const str = "Hello World!,,";

console.log(str.slice(0, str.length));
console.log(str.slice(0, str.length - 1));
console.log(str.slice(0, str.length - 2));
console.log(str.slice(-2, -1));
console.log(str.slice(-2));
console.log(str.slice(-8, -2));

/*
Output:
Hello World!,,
Hello World!,
Hello World!
,
,,
World!
*/