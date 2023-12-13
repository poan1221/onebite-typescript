/* 접근 제어자 */
class Employee {
  // 필드
  private name: string; // private 접근 제어자 설정
  protected age: number;
  public position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name}이 일함`); // private - 클래스 내부에서만 접근 가능
  }
}

class ExecutiveOfficer extends Employee {
  // 메서드
  func() {
    //this.name; // private - 해당 클래스가 아니면 무조건 접근 불가
    this.age; // 상속된 클래스까지만 접근 가능
  }
}

const employee = new Employee("이정환", 27, "devloper");

// employee.name = "홍길동"; // ❌ 오류
// employee.age = 30; // ❌ 오류
employee.position = "디자이너"; // 어디서든 접근 가능

//필드가 아닌 생성자의 매개변수에 지정하는 경우
class Employee222 {
  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}
