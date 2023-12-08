//any
let anyVar: any = 10;
// anyVar = "hello";

// anyVar = true;
// anyVar = {};

// anyVar.toUpperCase();
// anyVar.toFixed();
// anyVar.a;

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = "";
// unknownVar = 1;
// unknownVar = () => {};

// num = unknownVar; // 오류 !
// 하고 싶다면 타입 정제 진행
if (typeof unknownVar === "number") {
	// 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  unknownVar * 2;
}