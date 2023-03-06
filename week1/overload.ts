/* 타입스크립트에서 함수 오버로딩은 함수에 전달되는 인자의 개수와 타입이 다를 때, 다른 함수 시그니처를 사용하여 오버로딩을 할 수 있도록 하는 기능입니다.

함수 오버로딩은 함수 시그니처를 여러 개 작성하는 것으로, 함수 시그니처는 함수의 매개변수와 반환값의 타입을 지정하는 것입니다. 각각의 시그니처는 같은 함수 이름을 사용하지만, 인자의 개수와 타입이 다르게 정의됩니다. */

function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: any, y: any): any {
  return x + y;
}

console.log(add(1, 2)); // 3
console.log(add('Hello, ', 'TypeScript!')); // Hello, TypeScript!


// exercises 6 
interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
  { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
  { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

export function logPerson(person: Person) {
  console.log(
      ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
  );
}
// 함수 오버로딩
export function filterPersons(persons: Person[], personType:'user' , criteria: Partial<Person> ): User[];
export function filterPersons(persons: Person[], personType: 'admin', criteria: Partial<Person> ): Admin[];
export function filterPersons(persons: Person[], personType: string, criteria: Partial<Person> ): unknown[] {
  return persons
      .filter((person) => person.type === personType)
      .filter((person) => {
          let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
          return criteriaKeys.every((fieldName) => {
              return person[fieldName] === criteria[fieldName];
          });
      });
}

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);


console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);