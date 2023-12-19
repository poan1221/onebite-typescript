/* keyof 연산자 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "하하핳",
  age: 22,
};

type People = typeof people;

const people = {
  name: "하하핳",
  age: 22,
};

function getPropertyKey2(people: People, key: keyof typeof people) {
  return people[key];
}
