const numbers = [
    {
        n: 123,
        digits: 8
    },
    {
        n: 123.199,
        digits: 5
    },
    {
        n: 12345678,
        digits: 1
    },
    {
        n: 123,
        digits: 1
    },
    {
        n: 123.199,
        digits: 2
    },
    {
        n: 12345678,
        digits: 2
    },

];

numbers.forEach((n) => {
    if (n.digits > 0) {
        console.log(n.n.toFixed(n.digits));
    }
    else {
        console.log(n.n.toFixed());
    }
});

/*
Output:
123.00000000
123.19900
12345678.0
123.0
123.20
12345678.00
*/

