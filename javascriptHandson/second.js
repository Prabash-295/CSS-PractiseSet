let numbers = [101, 102, 103,  104, 105];

// arrow function for each syntax
numbers.forEach(temo => { 
  console.log(temo);
});

let numbers2 = [1, 2, 3, 4, 5];

numbers2.forEach(something);

// arrow function parameters using string literals
function something(val, idx, arr){
  console.log(`Value of element at index ${idx} of ${arr} is: ${val}`);
}

let numbers3 = [101, 102, 103, 104, 105];

numbers3.forEach(something2);
numbers3.forEach(printing);

// updating value
function something2(val, idx, arraya){
  arraya[idx]*=2;
}

let numbers4 = [1, 2, 3, 4 ,5];

numbers4.forEach(powered);
numbers4.forEach(printed);

function powered(element, index, array){
  array[index]=Math.pow(element, 2);
}