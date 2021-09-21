const numbers = [
    {
        n: 123,
        precision: 8
    },
    {
        n: 123.199,
        precision: 5
    },
    {
        n: 12345678,
        precision: 1
    },
    {
        n: 123,
        precision: 1
    },
    {
        n: 123.199,
        precision: 2
    },
    {
        n: 12345678,
        precision: 2
    },

];

numbers.forEach((n) => {
    if (n.precision > 0) {
        console.log(n.n.toPrecision(n.precision));
    }
    else {
        console.log(n.n.toPrecision());
    }
});

/*
Output:
123.00000
123.20
1e+7
1e+2
1.2e+2
1.2e+7

*/

