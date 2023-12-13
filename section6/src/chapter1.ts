/* 타입스크립트의 클래스 */
class Employee {
  // 필드 _ 생성자 함수에서 설정하지 않으면, 초기값 설정이 필수적으로 필요함.
  name: string = "";
  age: number = 0;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

// 타입 스크립트의 클래스는 타입으로도 사용 가능
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

// 상속 가능! _ super필수!
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
