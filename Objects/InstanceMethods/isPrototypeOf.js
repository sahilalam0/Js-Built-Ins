const obj1 = {
    a: 1
};

const obj2 = Object.create(obj1);

console.log(obj1.isPrototypeOf(obj2));
console.log(Object.prototype.isPrototypeOf(obj1));

/*
Output:
true
true
*/