/* 분산적인 조건부 타입 */
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// 유니온으로 넣으면, 각각의 타입이 들어갓다 나온 결과를 다시 유니온으로 묶어줌
// string | number

/* 실용적 예제 */
// 특정 값만 제외하는 타입 정의하기
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number
// never
// boolean

// 결과 : number | boolean
