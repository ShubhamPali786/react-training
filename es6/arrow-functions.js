// arrow-functions
// function fun_name() : named function
// function() : unnamed/anonymous function
// () => {} : arrow function
// params => expression

const person = {
  name: "mike",
  age: 12,
  greeting: function () {
    console.log("OUTSIDE", this);
    setTimeout(() => {
      console.log("INSIDE", this);
      console.log("hello from", this.name);
    }, 1000);
  },
};

console.log(person.greeting());
person.name = "john";
console.log(person.greeting());
