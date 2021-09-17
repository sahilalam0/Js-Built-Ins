const str = "Hello World!";

const examples = [
    {
        start: 0,
        end: str.length
    },
    {
        start: 1,
        end: str.length
    },
    {
        start: 3,
        end: 0
    },
    {
        start: -5,
        end: -2,
    },
    {
        start: -5,
        end: 10,
    }
];

examples.forEach((example) => {
    console.log(str.substring(example.start, example.end));
});

/**
Output:
Hello World!
ello World!
Hel

Hello Worl
*/