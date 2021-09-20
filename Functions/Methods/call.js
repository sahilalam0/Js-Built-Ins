const returnsNormalFunction = function () {
    this.x = 20;
    return function (arg1, arg2) {
        return arg1 + arg2 + this.x;
    }
}
const returnsArrowFunction = function () {
    this.x = 30;
    return (arg1, arg2) => {
        return arg1 + arg2 + this.x;
    }
}
const obj = {
    x: 10
};

const normal = returnsNormalFunction();
const arrow = returnsArrowFunction();

console.log(normal(10, 10), normal.call(obj, 10, 10));
console.log(arrow(10, 10), arrow.call(obj, 10, 10));

/*
Output:

50 30
50 50
*/