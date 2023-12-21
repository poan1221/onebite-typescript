/* Partial<T> */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};

/* Required<T> */
type Required<T> = {
  [key in keyof T]-?: T[key];
};
// 반드시 썸네일 프로퍼티가 존재해야 하는 게시글
const withThumbnailPost: Post = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

/* Readonly<T> */
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};

//   readonlyPost.content = '해킹당함'; // ❌
