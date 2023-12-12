/* 함수 타입 표현식 */
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/* 호출 시그니쳐 */
type Operation2 = {
    (a: number, b: number): number;
    name: string; //프로퍼티 추가 가능 -> 하이브리드 타입
  };
  
  const add2: Operation2 = (a, b) => a + b;
  const sub2: Operation2 = (a, b) => a - b;
  const multiply2: Operation2 = (a, b) => a * b;
  const divide2: Operation2 = (a, b) => a / b;

// 하이브리드 타입일 경우, 함수 & 객체로 둘다 사용 가능
add2(2, 2);
add.name;