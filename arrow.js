// function doubleIt(num) {
//   return num * 2;
// }

// const doubleIt = function myFunc(num) {
//   return num * 2;
// };

const doubleIt = (num) => num * 2;
const add = (num1, num2) => num1 + num2;
const give5 = () => 5;

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const total = sum * diff;
  return total;
};

const sum = add(10, 20);
const result = doubleIt(10);
const result2 = give5();
const result3 = doMath(10, 5);

console.log(result);
console.log(sum);
console.log(result2);
console.log(result3);
