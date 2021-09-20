const strings = [
    "   Hello World    ",
    "Hello    World",
    "\tHello World\n"
];

strings.forEach((str) => {
    console.log('Original : "' + str + '" , ' + 'Trimmed : "' + str.trim() + '"\n');
});

/*
Output:
Original : "   Hello World    " , Trimmed : "Hello World"

Original : "Hello    World" , Trimmed : "Hello    World"

Original : "    Hello World
" , Trimmed : "Hello World"
*/
