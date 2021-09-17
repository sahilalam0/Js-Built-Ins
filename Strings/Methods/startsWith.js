const str = "Hello World, How are you?";

console.log(str.startsWith("Hello"));
console.log(str.startsWith("Hello "));
console.log(str.startsWith("Hello ", 1));
console.log(str.startsWith("hello"));
console.log(str.startsWith("Hell o"));

/**
Output:
true
true
false
false
false
*/