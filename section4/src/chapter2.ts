/* 함수 타입 호환성 */
// 기준 1. 반환값이 호환되는지?
type A = () => number; // number
type B = () => 10; // number literal

let a: A = () => 10;
let b: B = () => 10;

a = b; // ✅
//b = a; ❌ 반환값 끼리의 다운 케스팅으로 불가능


// 기준 2. 매개변수가 호환되는지? - 매개변수의 갯수가 같을 떄
type C = (value: number) => void; // number
type D = (value: 10) => void; // number literal

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; ❌ 매개변수 끼리에 업케스팅은 안됨 -> 매개변수가 객체일 경우에 두드러짐
d = c; // ✅


type Animal = {
    name: string;
  };
  
  type Dog = {
    name: string;
    color: string;
  };
  
  let animalFunc = (animal: Animal) => {
    console.log(animal.name);
  };
  
  let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
  };
  
/*  
    animalFunc = dogFunc; 풀어보면 아래와 같음 

    animalFunc = (animal: Animal) => {
        console.log(animal.name);  // ✅
        console.log(animal.color); // ❌ 이게 아예 없으니까.. 될리가!
    }; 
*/
  dogFunc = animalFunc; // ✅

// 기준 2. 매개변수가 호환되는지?
// 매개변수의 갯수가 다을 때 : 매개변수가 적을 넣는 것은 호환 가능

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅
// func2 = func1; ❌