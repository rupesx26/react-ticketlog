class TestClass {
  constructor() {
    let msg = "Using ES2015+ syntax";
    console.log(msg);
    let newTest = 1;
    let update = ++newTest;
    console.log(++update);
  }
}

let test = new TestClass();
