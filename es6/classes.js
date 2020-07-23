// classes

class Demo {
  name = "test";
  constructor() {
    console.log("constructor called");
  }
  func1() {
    let i = 10;
    console.log("function 1 called", i);
  }
  func2() {
    this.func1();
    console.log("function 2 called");
  }
}

const d = new Demo();
d.func2();
console.log(d.name);
