/*  제네릭  */

function func<T>(value: T): T {
  return value;
}

let num = func(10);
// number 타입

let str = func("kk");
// string 타입

// 튜플 타입으로 반환값을 얻고 싶다면, 함수 호출 시 T를 다시 튜플 타입으로 명시
let arr = func<[number, number, number]>([1, 2, 3]);
