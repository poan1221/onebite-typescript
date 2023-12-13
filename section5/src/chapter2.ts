/* 선언 합침 -> 결국 같은 인터페이스로 합쳐짐 */
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// 하나로 합쳐져서 이렇게 쓸 수 있음
const person: Person = {
  name: "",
  age: 30,
};
