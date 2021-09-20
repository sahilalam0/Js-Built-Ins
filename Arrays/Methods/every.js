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

function checkAdult(people) {
    let minor = null;
    if (people.every((person) => {
        if (person.age >= 18) {
            return true;
        }
        minor = person.name;
        return false;
    })) {
        console.log('Everyone is an adult!');
    }
    else {
        console.log(minor + ' is not an adult');
    }
}

checkAdult(people);

/*
Output:
person3 is not an adult
*/