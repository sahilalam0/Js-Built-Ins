const fn1 = function () {
    return 1;
};


const fn2 = new Function(['console.log("Hello")']);

function fn3(...arg) {
    return 3;
}

console.log(fn1.toString());
console.log(fn2.toString());
console.log(fn3.toString());

/**
Output:
function () {
    return 1;
}

function anonymous(
) {
console.log("Hello")
}

function fn3(...arg) {
    return 3;
}
*/