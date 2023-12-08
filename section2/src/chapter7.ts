//void

// 함수의 반환 값에 타입 정의
function func1(): string {
    return "hello";
}

// return 조차 적을 필요 없는, 반환값이 없을 때
function func2(): void {
    console.log("hello");
}

let a:void;
a = undefined; // 이거만 가능하고 나머지는 불가능


//never : 반환값이 절대 나올 수 없을 떄
// 무한 루프를 돌기 때문에 어떠한 값도 반환되지 않음
function func3(): never {
    while (true) {}
  }
//의도적 오류 발생 함수의 반환값
function func4(): never {
    throw new Error();
}   