/* 함수 타입 정의 */

// 어떤 "타입의" 매개변수를 받고, 어떤 "타입의" 결과값을 반환하는지
function func(a: number, b: number) {
    return a + b;
}

/* 화살표 함수에서는? */
const add = (a: number, b: number) => a + b;

/* 함수 매개변수 */
function intro(name = "하하", tall? : number) {
    console.log(`name: ${name}`);
    if (typeof tall === "number") {
        console.log(`tall : ${tall + 10}`);
    }
}

function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
}

getSum(1, 2) //3
getSum(1, 2, 3, 4) //10

// 3개까지만 인자를 받고 싶다면, 튜플 타입으로
function getSumThree(...rest: [number, number, number]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
  }
  
  getSumThree(1, 2, 3)    // ✅
  // getSumThree(1, 2, 3, 4) ❌ 매개변수 길이를 넘어가는 인자를 받으면 오류남

