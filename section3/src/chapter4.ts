/* 대수 집합 */
/* union 타입 : 합집합 */

let a: string | number;
a = 1;
a = "hello";

let arr: (number | boolean)[] = [1, true];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};
  
type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: ""
}

let union2: Union1 = {
    name: "",
    language: ""
}
let union3: Union1 = {
    name: "",
    color: "",
    language: ""
}

/* ❌ 공통적인 프로퍼티만 가지고 있는 객체는 안됨 -> 교집합
let union4: Union1 = {
    name: "",
  }; */

/* intersection 타입 : 교집합 */

type Intersection = Dog & Person;

let Inter1: Intersection = {
    name: "",
    color: "",
    language: "" // 하나라도 빠질 경우 오류!
}