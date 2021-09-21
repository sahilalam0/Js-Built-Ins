const obj = {
    a: 1
};

Object.seal(obj);
obj.a = 2;
delete obj.a;
obj.b = 3;
console.log(obj);

/*
Output:
{ a: 2 }
*/