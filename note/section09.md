# section9. 조건부 타입

- extends와 삼항 연산자를 이용해 조건에 따라 각각 다른 타입을 정의하도록 돕는 문법
- 제네릭과 조건부 타입을 함께 쓰면 더 좋음

## 1. 분산적인 조건부 타입

- 조건부타입을 유니언과 사용할 때, 조건부 타입이 분산적으로 적용하도록
  - 유니언으로 넣은 각각의 타입을 분리하여 결과를 내고, 그 결과를 다시 유니언으로 묶어 줌
    ```tsx
    type StringNumberSwitch<T> = T extends number ? string : number;

    let a: StringNumberSwitch<number | string>;
    // StringNumberSwitch<number> | StringNumberSwitch<string>
    // string | number
    ```

## 2. Infer

- 조건부 타입 내에서 특정 타입을 추론하는 문법
- `T extends () => infer R`에서 `infer R`은 이 조건식을 참이 되도록 만들 수 있는 최적의 R 타입을 추론하라는 의미
