/* 인터페이스 */
interface Person {
    name: string;
    age?: number;
    readonly nickname: string;
    // 메서드 타입 정의 가능 _ 함수 표현식
    sayHi: () => void;
    // 메서드 타입 정의 _ 호출 시그니처로도 가능 / 메서드 오버로딩 구현 가능
    // sayHi2(): void;
    // sayHi2(a: number, b: number): void;
}

const person: Person = {
    name: "하하하하",
    age : 27,
    nickname: "할롱",
    sayHi: function (){
        console.log("hi");
    },
  };

  person.sayHi();

  