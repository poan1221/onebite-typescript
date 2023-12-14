/* 제네릭 클래스 */
// 타입만 다른 클래스를 만들고자 할떄, 제네릭을 쓰면 훨씬 효율적임
class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
const stringList = new List(["1", "2"]);
