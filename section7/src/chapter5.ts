/* 프로미스 객체 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // 결과값 : 20
    resolve(20);
    // reject("어쩌구 때문에 에러~")
  }, 3000);
});

promise.then((response) => {
  // response는 number 타입
  console.log(response); // 20
});

promise.catch((error) => {
  // reason 은 any 타입으로 되어있어서, 타입 좁히기를 진행해서 해야 함
  if (typeof error === "string") {
    console.log(error);
  }
});

/* 프로미스를 반환하는 함수의 타입을 정의 */
interface Post {
  id: number;
  title: string;
  content: string;
}

// 반환값 타입을 프로미스로 정의
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 본문",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
