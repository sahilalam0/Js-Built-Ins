const people = [
    {
        name: 'person1',
        age: 20
    },
    {
        name: 'person2',
        age: 21
    },
    {
        name: 'person3',
        age: 17
    },
    {
        name: 'person4',
        age: 28
    },
    {
        name: 'person5',
        age: 20
    },
];

function returnFirstAdult(people) {
    return people.find((person) => {
        if (person.age >= 18) {
            return true;
        }
        return false;
    })
}

console.log(returnFirstAdult(people));
