// 배열
let numArr: number[] = [1,2,3];

let strArr: string[] = ["hello", "welcome", "to World"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가가는 요소들의 타입이 다양한 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5]
]

// 튜플
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];

const users: [string, number][] = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    // [5, "조아무개"], 배치 오류 발생 시 빠른 수정이 가능
  ];
  