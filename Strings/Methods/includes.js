const str = "Hello World\nNext Line";

console.log(str.includes("Hello"));
console.log(str.includes("hello"));
console.log(str.includes("Hello", 1));
console.log(str.includes(" "));
console.log(str.includes("\n"));

/*
Output:
true
false
false
true
true
 */
