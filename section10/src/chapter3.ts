/* Exlcude<T, U> */
type Exlcude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, string>;
// boolean

/* Extract<T, U> */
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;
// boolean

/* ReturnType<T> */
type ReturnType<T extends (...args: any) => any> = T extends (
  ...agrs: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
// string

type ReturnB = ReturnType<typeof funcB>;
// number
