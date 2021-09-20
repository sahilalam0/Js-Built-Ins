const returnsNormalFunction = function () {
    this.x = 20;
    return function (arg1, arg2, ...arg3) {
        console.log(arg3)
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

const normal = returnsNormalFunction().bind(obj, 10, 10);
const arrow = returnsArrowFunction().bind(obj, 10, 10);

console.log(normal(1, 2, 3), arrow())
/*
Output:

[ 1, 2, 3 ]
30 50
*/