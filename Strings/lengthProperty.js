const strings = {
    string1: "HelloWorld",
    string2: "Hello World",
    string3: "Hello\World",
    string4: "Hello\a\World",
    string5: "Hello\0World",
    string6: "Hello\nWorld"
}

function printStringAndLength(string_object) {
    Object.values(string_object).forEach((str) => {
        console.log(str, str.length);
    })
}

printStringAndLength(strings);

/*
Output:
        HelloWorld 10

        Hello World 11

        HelloWorld 10

        HelloaWorld 11

        HelloWorld 11

        Hello
        World 11
*/
