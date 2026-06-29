let numbers =  [1, 2, 3 ,4 ,5];

let output = numbers.reduce((preq, curr) => {
  return preq | curr;
});

console.log(output);