// 1. 타입 변수 여러개도 가능
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

// 2. 배열 타입을 인수로 받을 떄도 가능
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// number

let str = returnFirstValue([1, "hello", "mynameis"]);
// number | string

// 3. 명확한 첫번째 요소의 타입을 알고 싶다면?  - 튜플과 나머지 파라미터로
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let firstV = returnFirstValue2([1, "hello", "mynameis"]);
// number

// 4. 타입 변수를 확장하며 length 프로퍼티가 있는 것으로 제한적으로 활용 하기
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123"); // ✅

getLength([1, 2, 3]); // ✅

getLength({ length: 1 }); // ✅

//   getLength(undefined);        // ❌

//   getLength(null);             // ❌
