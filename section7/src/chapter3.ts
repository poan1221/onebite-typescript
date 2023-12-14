/* 제네릭 인터페이스 */
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 타입 변수에 할당할 타입을 꺽쇠와 함께 무조건 넣어주어야 함
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/* 인덱스 시그니쳐 */
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/* 제네릭 타입 별칭 */
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};
