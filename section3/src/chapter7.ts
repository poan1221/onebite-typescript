/* 타입 좁히기 */

type Person = {
    name: string;
    age: number;
}

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name 은 age살 입니다.
function func(value: number | string | Date | null | Person ) {
    if (typeof value === "number") {
      console.log(value.toFixed());
    } else if (typeof value === "string") {
      console.log(value.toUpperCase());
    //} else if (typeof value === "object") { 
    // 이때는 null 도 포함되기 때문에 오류 발생이 될 수 있음
    } else if (value instanceof Date) {
      console.log(value.getTime());
    } else if (value && "age" in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
  }