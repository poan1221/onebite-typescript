/* Pick<T, K> */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumnailURL'
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날~~~",
  content: "",
};

/* Omit<T, K> */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'thumnailURL', 'title'>
// Pick<Post, 'tags' | 'content' | 'thumnailURL'>

// 타이틀만 없는 게시글이 있다면
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/* Record<K, V> */
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

/* 이렇게 쓰는 대신에

type Thumbnail = {
    large: {
      url: string;
    };
    medium: {
      url: string;
    };
    small: {
      url: string;
    };
  }; 
  
*/

type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;
