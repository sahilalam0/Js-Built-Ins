const a = {
    a: 1
}

const b = Object.create(a);

console.log(b);
console.log(Object.getPrototypeOf(b) === a);
console.log(b.__proto__ === a);
console.log(b === a);

/*
Output:

{}
true
true
false
*/