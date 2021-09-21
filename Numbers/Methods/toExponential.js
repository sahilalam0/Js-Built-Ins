const numbers = [
    {
        n: 123,
        fractionDigits: 0
    },
    {
        n: 123.111,
        fractionDigits: 0
    },
    {
        n: 12345678,
        fractionDigits: 0
    },
    {
        n: 123,
        fractionDigits: 1
    },
    {
        n: 123.111,
        fractionDigits: 1
    },
    {
        n: 12345678,
        fractionDigits: 2
    },

];

numbers.forEach((n) => {
    if (n.fractionDigits > 0) {
        console.log(n.n.toExponential(n.fractionDigits));
    }
    else {
        console.log(n.n.toExponential());
    }
});

/*
Output:
1.23e+2
1.23111e+2
1.2345678e+7
1.2e+2
1.2e+2
1.23e+7
*/

