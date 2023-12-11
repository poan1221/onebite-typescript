/* 객체 타입의 호환성 */
type Animal = {
    name: string;
    color: string;
  };
  
  type Dog = {
    name: string;
    color: string;
    breed: string;
  };
  
  let animal: Animal = {
    name: "기린",
    color: "yellow",
  };
  
  let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
  };
  
  animal = dog; // ✅ OK 업캐스팅
  // dog = animal; ❌ NO 다운캐스팅

  /* 초과 프로퍼티 검사 */
  let animal2: Animal = {
    name: "진돌이",
    color: "white",
    // breed: "진도", // 초기에 있지 않은 프로퍼티를 넣어서 객체 리터럴로 초기화하면 오류로 인식된다.
  };