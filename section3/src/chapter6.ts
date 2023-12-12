/* 타입단언 */
type Person = {
    name: string;
    age: number;
  };
  
  let person = {} as Person;
  person.name = "";
  person.age = 23; 

let num1 = 10 as never;   // ✅
let num2 = 10 as unknown; // ✅

// let num3 = 10 as string;  // ❌ 서로 슈퍼-서브 관계가 아니라 단언할 수 없음

// 다중 단언을 사용하면 가능하지만, 가능하면 하지 않는 것이 좋음
let num3 = 10 as unknown as string;


/* const 단언 */
let num4 = 10 as const;
// 10 Number Literal 타입으로 단언됨

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// 모든 프로퍼티가 readonly를 갖도록 단언됨

/* Non Null 단언*/
type Post = {
    title: string;
    author?: string;
  };
  
  let post: Post = {
    title: "게시글1",
  };
  
  const len: number = post.author!.length;