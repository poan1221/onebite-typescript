/* 템픅릿 리터럴 타입 */

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

// 전체를 다 작성하기 어려움...
// type ColoredAnimal = `red-dog` | 'red-cat' | 'red-chicken' | 'black-dog' ... ;

type ColoredAnimal = `${Color}-${Animal}`;
