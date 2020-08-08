function add(num1, num2 = 15) {
  //   if (num2 == undefined || num1 == undefined) {
  //     num1 = 0;
  //     num2 = 0;
  //   }

  //   num2 = num2 || 0;
  return num1 + num2;
}

const total = add(15, 5);
console.log(total);
