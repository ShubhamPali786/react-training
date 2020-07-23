// default arguments
function test(a, b = 0) {
  console.log(a, b);
}
test(1, 2);
test(1);

// rest : ... (spread operator)
function sumOfNos(a, b, c, ...d) {
  console.log(a, b, c, d);
  for (let v of d) {
    console.log(v);
  }
}
sumOfNos(1, 2, 3);
sumOfNos(1, 2, 3, 4, 5, 6, "test", true);

// spread : immutability : objects & arrays
const product = { id: 100, name: "product 1", price: 12999 };
const cart = [{ ...product }];
console.log(product);
console.log(cart);
cart[0].qty = 3;
console.log(cart);
console.log(product);
// test
cart = [...cart, { ...product }];
