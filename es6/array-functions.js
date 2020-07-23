// array functions

// map
const nos = [1, 2, 3, 4, 5, 6];
// [1,4,9,16,25,36]
// const square = [];
// for (let i = 0; i < nos.length; i++) {
//   square.push(nos[i] * nos[i]);
// }
const square = nos.map((value, index, arr) => {
  console.log(value, index, arr);
  if (value % 2 === 0) {
    return value * value;
  }
});
console.log(square, nos);

// filter
const evenNos = square.filter((value) => value !== undefined);
console.log(evenNos, square, nos);
