const strings = [
    "   Hello World    ",
    "Hello    World",
    "\tHello World\n"
];

strings.forEach((str, ind) => {
    console.log("String " + (ind + 1) + ':');
    console.log('Original : "' + str + '"');
    console.log('Trimmed : "' + str.trim() + '"');
    console.log('TrimmedStart : "' + str.trimStart() + '"');
    console.log('TrimmedEnd : "' + str.trimEnd() + '"\n');
});

/*
Output:
String 1:
Original : "   Hello World    "
Trimmed : "Hello World"
TrimmedStart : "Hello World    "
TrimmedEnd : "   Hello World"

String 2:
Original : "Hello    World"
Trimmed : "Hello    World"
TrimmedStart : "Hello    World"
TrimmedEnd : "Hello    World"

String 3:
Original : "    Hello World
"
Trimmed : "Hello World"
TrimmedStart : "Hello World
"
TrimmedEnd : "  Hello World"
*/
