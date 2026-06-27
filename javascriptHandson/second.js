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
 let prices = [1, 105, 69];
let temp2=prices.pop()
const objCheck = {
  name : "Prabash",
  age : 21,
  phone : "iqoo z6 pro",
  cgpa : 7.00,
};
const abba="age";
delete objCheck["cgpa"];
let names2 = ["Raju", "Rajesh", "Balaji"];
names2 = names.toString();
let marks2 = [14, 58, 74, 65];
marks.toString();
let marks3 = [1, 2, 3, 4 ,5];
let marks4 = [6, 7 ,8  ,9 ,10];
let marks5 = [11, 12, 13 ,14 ,15];
marks3=marks3.concat(marks4);
marks3=marks3.concat(marks5);
let englishHeroes = [0,  1 ,2, 3,  4, 5];
const companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
companies.splice(1,1,"OLA");
companies.push("AMAZON");