const str = "aabbaacc";
//function to remove consecutive adjacent characters using replace method
const removeAdjacentConsecutiveCharacters = (str) => {
    return str.replace(/([^])\1+/g, (s) => (s[0]));
};

console.log(removeAdjacentConsecutiveCharacters(str));

const strings = [
    {
        str: "dogs and dogs are also friends",
        sub_str: 'dogs'
    },
    {
        str: "Hello hello ",
        sub_str: 'hello'
    }
];

// //function to remove all sub strings(which is passed as arguements in the below function) from a given string
// const usingReplaceAll = ({ str, sub_str }) => {
//     return str.replaceAll(sub_str, '');
// };

//function to remove first sub string(which is passed as arguements in the below function) from a given string
const usingReplace = ({ str, sub_str }) => {
    return str.replace(sub_str, '');
};

strings.forEach((str) => {
    // console.log(usingReplaceAll(str));
    console.log(usingReplace(str));
})

/*
Output:

abac
 and dogs are also friends
Hello
*/