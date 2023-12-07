// object 정의 -> 가능하나 프로퍼티 접근하면 오류 발생
let user: object = {
    id: 1,
    name: "홍길동"
}

// user.id; //(접근 불가)

// 객체 리터럴 타입 정의
let users: {
    id?: number;
    readonly name: string;
} = {
    id: 1,
    name: "강백호"
}

// users.name = "호랑이"; //수정 불가라 오류로 나타남