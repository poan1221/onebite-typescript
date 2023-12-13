/* 인터페이스 확장 */

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  name: "doldol"; // 타입 재 정의 _ 원본 타입의 서브타입만 가능
  breed: string;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// interface DogCat extends Dog, Cat {} 다중 확장 가능
