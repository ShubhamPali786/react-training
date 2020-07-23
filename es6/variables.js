// es6
// variables
// var
// let & const : block scope variables
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

// const : read only variable
const a = 10;
// a = "test";

// object are mutable
// objects & arrays
const b = { name: "test" };
console.log(b);
b.name = "demo";
console.log(b);
