const properties = [
    Number.EPSILON,
    Number.MAX_SAFE_INTEGER,
    Number.MAX_VALUE,
    Number.POSITIVE_INFINITY,
    Number.MIN_SAFE_INTEGER,
    Number.MIN_VALUE,
    Number.NEGATIVE_INFINITY,
    Number.NaN
];

properties.forEach((n) => {
    console.log(n);
});

/*
Output:
2.220446049250313e-16
9007199254740991
1.7976931348623157e+308
Infinity
-9007199254740991
5e-324
-Infinity
NaN
*/