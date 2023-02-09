const arr1 = ['Hello'];
const arr2 = ['World'];
const arr3 = arr1.concat(arr2, '!', ['How'], ['are', 'you'], '?');

console.log(arr3);

/*
Output:

[
  'Hello', 'World',
  '!',     'How',
  'are',   'you',
  '?'
]


*/
