type Dog = {
    name: string;
    isBark: boolean;
};
  
type Cat = {
    name: string;
    isScratch: boolean;
};
  
type Animal = Dog | Cat;

// Dog 타입인지 확인하는 타입 가드
// isDog 라는 함수가 true 일 경우, 반환값 animal 이 Dog 임을 보장
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

// Cat 타입인지 확인하는 타입가드
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
}