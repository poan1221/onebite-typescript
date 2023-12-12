/* 서로소 유니온 타입 -> 교집합이 없는!*/

type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
  };
  
  type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
  };
  
  type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
  };
  
  type User = Admin | Member | Guest;
  

/*   
1. 주석이 없으면 다른 개발자가 인지하기가 어려움
function login(user: User) {
    if ("kickCount" in user) {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
    } else if ("point" in user) {
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
    } else {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
    }
} 

*/

/*
  2. 서로소 유니언으로 중첩되지 않도록 구분지을 수 있는 프로퍼티를 추가하면?!
function login(user: User) {
    if (user.tag === "ADMIN") {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
    } else if (user.tag === "MEMBER") {
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
    } else {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
    }
}
*/

/* 더 직관적으로 switch 문으로도 가능 */
function login(user: User) {
    switch (user.tag) {
      case "ADMIN": {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
        break;
      }
      case "MEMBER": {
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
        break;
      }
      case "GUEST": {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
        break;
      }
    }
  }

// 복슴 _ 비동기 작업의 결과물을 처리하는 객체

type LoadingTask = {
    state: "LOADING"
}

type FailedTask = {
    state: "FAILED";
    error: {
        message: string;
    };
}

type SuccessTask = {
    state: "SUCCESS";
    respose: {
        data: string;
    };
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
    switch (task.state) {
        case "LOADING": {
            console.log("로딩중");
            break;
        }
        case "FAILED": {
            console.log(`에러발생 : ${task.error.message}`);
            break;
        }
        case "SUCCESS": {
            console.log(`에러발생 : ${task.respose.data}`);
            break;
        }
    }
}