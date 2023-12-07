// enum 타입
const user1 = {
    name: "강백호",
    role: 0, //관리자
};

const user2= {
    name: "홍길동",
    role: 1, //회원
};

const user3= {
    name: "아무개",
    role: 2, //게스트
};

// 나중에 role 이 헷갈리거나 계속 추가될 경우를 위해, enum 으로 열거하여 저장할 수 있음
enum Role {
    ADMIN, // 0
    USER, // 1
    GUEST, // 2
}

enum Language {
    korean = "ko",
    english = "en",
  }

  const users1 = {
    name: "이정환",
    role: Role.ADMIN, //관리자
    language: Language.korean,
  };
  
  const users2 = {
    name: "홍길동",
    role: Role.USER, // 회원
  };
  
  const users3 = {
    name: "아무개",
    role: Role.GUEST, // 게스트
  };