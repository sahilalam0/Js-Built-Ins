const str = "Hello World!";

console.log(str.endsWith("World"));
console.log(str.endsWith("World", str.length - 1));

/*
Output:
false
true
 */