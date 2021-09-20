function fn1() {
    return 0;
}

const fn2 = function () {
    return 0;
}

const fn3 = () => {
    return 0;
}

console.log(fn1.name, fn2.name, fn3.name);
