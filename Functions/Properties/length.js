function fn1(arg1, arg2) {
    return 0;
}

const fn2 = function (arg1) {
    return 0;
}

const fn3 = (...arg) => {
    return 0;
}

console.log(fn1.length, fn2.length, fn3.length);
