const obj1 = {
    a: 1
};

const obj2 = new Object(1);
const obj3 = new Object([1, 2, 3, 4]);

console.log(obj1, obj1.toString());
console.log(obj2, obj2.toString());
console.log(obj3, obj3.toString());

/*
Output:

{ a: 1 } [object Object]
[Number: 1] 1
[ 1, 2, 3, 4 ] 1,2,3,4
*/