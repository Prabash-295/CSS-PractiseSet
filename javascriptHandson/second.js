let input = prompt("Enter Your Full Name: ");
let str1='@';
console.log(str1.concat(input)+input.length);
const names = ["   Raju Kumar   ", "Alex", "Subbiah", "Dinesh", "RaviChander"];
for(let temp of names){
  console.log(temp.trim());
}
let marks = [85, 97, 44, 37 ,76 ,60];
let sum = 0;
for(let temp of marks){
  sum+=temp;
}
console.log(sum/marks.length);
let i = 0;
let prices = [250, 645, 300, 900, 50];
for(let temp of prices){
  let discount = temp / 10;
  prices[i]-=discount;
  i++;
}