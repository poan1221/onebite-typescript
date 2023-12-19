/* 맵드 타입 */
interface User {
  id: number;
  name: string;
  age: number;
}

// 맵드 타입을 이용하여, 선택적 프로퍼티로 변경한 타입을 정의
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

// 맵드 타입 + keyof 연산자 를 이용하여 프로퍼티 값을 모두 boolean 타입으로 변경
type BooleanUser = {
  [key in keyof User]: boolean;
};

// 읽기 전용으로 변경
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: "러러러러",
    age: 27,
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 유저 정보 수정 기능
}
