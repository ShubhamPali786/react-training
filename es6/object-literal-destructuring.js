// object literal
function user(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName: firstName + " " + lastName,
  };
}

const u = user("john", "doe");
console.log(u);

// destructuring
// const u1 = user("jane", "doe");
// const fullName= u1.fullName
// const name=u1.fullName;
// u1.firstName

const { fullName: name, firstName } = user("jane", "doe");
// console.log(fullName);
console.log(name);
