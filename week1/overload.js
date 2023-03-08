"use strict";
/* 타입스크립트에서 함수 오버로딩은 함수에 전달되는 인자의 개수와 타입이 다를 때, 다른 함수 시그니처를 사용하여 오버로딩을 할 수 있도록 하는 기능입니다.

함수 오버로딩은 함수 시그니처를 여러 개 작성하는 것으로, 함수 시그니처는 함수의 매개변수와 반환값의 타입을 지정하는 것입니다. 각각의 시그니처는 같은 함수 이름을 사용하지만, 인자의 개수와 타입이 다르게 정의됩니다. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminsOfAge23 = exports.usersOfAge23 = exports.filterPersons = exports.getObjectKeys = exports.logPerson = exports.persons = void 0;
function add(x, y) {
    return x + y;
}
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];
function logPerson(person) {
    console.log(` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`);
}
exports.logPerson = logPerson;
// 제네릭
function getObjectKeys(criteria) {
    return Object.keys(criteria);
}
exports.getObjectKeys = getObjectKeys;
function filterPersons(persons, personType, criteria) {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
        //console.log('걸러져 나온 값들',person );
        let criteriaKeys = getObjectKeys(criteria);
        console.log('이건뭐야', criteriaKeys);
        return criteriaKeys.every((fieldName) => {
            return person[fieldName] === criteria[fieldName];
        });
    });
}
exports.filterPersons = filterPersons;
exports.usersOfAge23 = filterPersons(exports.persons, 'user', { age: 23 });
exports.adminsOfAge23 = filterPersons(exports.persons, 'admin', { age: 23 });
// console.log('Users of age 23:');
exports.usersOfAge23.forEach(logPerson);
// console.log('Admins of age 23:');
exports.adminsOfAge23.forEach(logPerson);
