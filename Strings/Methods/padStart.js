const str = "HelloWorld";

console.log(str.padStart(11));
console.log(str.padStart(11, '!'));
console.log(str.padStart(11, '!,'));
console.log(str.padStart(15, '!,!'));

/*
Output:
HelloWorld
HelloWorld!
HelloWorld!
HelloWorld!,!!,
 */