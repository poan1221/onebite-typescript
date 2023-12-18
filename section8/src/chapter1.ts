/* 인덱스드 엑세스 타입 */
// 객체 일 경우
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 내요요요요용",
  author: {
    id: 1,
    name: "하하",
  },
};

//배열 일 경우
type EventList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

const event: EventList[number] = {
  title: "게시글 제목",
  content: "게시글 내요요요요용",
  author: {
    id: 1,
    name: "하하",
  },
};

function printAuthorInfo2(author: EventList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// 튜플인 경우
type Tup = [number, string, boolean];

type Tup2 = Tup[2];

type TupNum = Tup[number];
