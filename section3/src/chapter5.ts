/* 타입 추론 */

let a = 10;
// number 타입으로 추론

let b = "hello";
// string 타입으로 추론

let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};
// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func() {
    return "hello";
  }
  // 반환값이 string 타입으로 추론된다

  function func2(message = "hello") {
    return "hello";
  }

/* const 상수 추론 */
  const num = 10;
  // 10 Number Literal 타입으로 추론
  
  const str = "hello";
  // "hello" String Literal 타입으로 추론

  