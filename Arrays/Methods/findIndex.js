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

function returnFirstAdultIndex(people) {
    return people.findIndex((person) => {
        if (person.age >= 18) {
            return true;
        }
        return false;
    })
}

const firstAdultIndex = returnFirstAdultIndex(people);
console.log(firstAdultIndex);
console.log(people[firstAdultIndex])
