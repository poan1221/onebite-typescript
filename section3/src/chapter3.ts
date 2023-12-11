// unknown 타입 
// 어떤 타입도 넣을 수 있다 = 업케스팅 진행
let a: unknown = 1;                 // number -> unknown
let b: unknown = "hello";           // string -> unknown
let c: unknown = true;              // boolean -> unknown
let d: unknown = null;              // null -> unknown
let e: unknown = undefined;         // undefined -> unknown
let f: unknown = [];                // Array -> unknown
let g: unknown = {};                // Object -> unknown
let h: unknown = () => {};          // Function -> unknown

// unknown 타입은 any를 제외한 어떤 타입의 변수에도 넣을 수 없다 = 다운케스팅
let unknownValue: unknown;

// let a: number = unknownValue; 오류!

// never 타입
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    // 업케스팅 다 됨!
    let i: number = neverFunc();            // never -> number
    let j: string = neverFunc();            // never -> string
    let k: boolean = neverFunc();           // never -> boolean
    let l: null = neverFunc();              // never -> null
    let m: undefined = neverFunc();         // never -> undefined
    let n: [] = neverFunc();                // never -> Array
    let o: {} = neverFunc();                // never -> Object

    //let never1: never = 10; 다운케스팅 안됨!
}


// void
function voidExam(){
    function voidFunc(): void {
        console.log("hi");
      }

    let voidVar: void = undefined; // 업케스팅
}