const str = "HelloWorld";

console.log(str.padEnd(11));
console.log(str.padEnd(11, '!'));
console.log(str.padEnd(11, '!,'));
console.log(str.padEnd(15, '!,!'));

/*
Output:
HelloWorld
HelloWorld!
HelloWorld!
HelloWorld!,!!,
 */