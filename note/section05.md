# chapter 5. 인터페이스

- 타입 별칭과 동일하게 타입에 이름을 지어주는 또 다른 문법
- 객체의 구조를 정의하는데 특화된 문법
- 상속, 합침 등의 특수한 기능을 제공

## 0. 인터페이스

- 객체 정의과 동일하게, 선택적 프로퍼티 `프로퍼티?` / 읽기전용 프로퍼티 `readonly 프로퍼티` 설정 가능
- 메서드 타입 정의 가능
  - 함수 표현식 `메서드 명 : () => void` / 호출 시그니처 `메서드명() : void` 로 정의
  - 메서드 오버로딩도 가능한데, 이때는 호출 시그니처로만 정의 가능
- \*주의사항\*\*\*
  - union 이나 intersection 타입으로 정의 불가능!
  - 원한다면 인터페이스로 만든 타입을 타입별칭과 함께 사용하거나, 타입 주석에 직접 사용

## 1. 인터페이스 확장

- 하나의 인터페이스를 다른 인터페이스들이 상속받아 중복된 프로퍼티를 정의하지 않도록 도와주는 문법
- `interface 타입이름 extends 확장_할_타입이름`
- 인터페이스 뿐만 아니라 타입 별칭으로 정의된 객체도 확장 가능하며, 다중 확장도 가능함

```tsx
type Animal = {
  name: string;
  color: string;
};

// 타입별칭으로 확장하기
interface Dog extends Animal {
  breed: string;
}
interface Cat extends Animal {
  isScratch: boolean;
}

// 다중확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  breed: "",
  isScratch: true,
};
```

## 2. 인터페이스 선언 합치기

- 동일 스코프 내의 중복된 이름으로 선언한 인터페이스는 합쳐져 하나가 됨.
  - 동일한 이름의 프로퍼티를 서로 다른 타입으로 정의할 수 없음 - 충돌(오류)
  - 주로 모듈 보강을 위해 사용됨
