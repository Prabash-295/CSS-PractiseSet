const product = {
  name : "Parker Jotter Standard CT Ball Pen (Black)",
  ratingInStars : 4,
  ratings: 7002,
  isDeal: true,
  price: 270,
  MRP : 285,
  offInPercentage : 5,
};
const profile = {
  userName : "shradhakhapra",
  posts : 195,
  followers : "569k",
  following : 4,
  isFollow : false,
};
let num = 10;
if(num%2===0){
  console.log(num, "is Even Number");
}
else{
  console.log(num, "is odd Number");
}
let age = 17;
age >= 18 ? console.log("adult") : console.log("Not Adult");
let fiveMult = prompt("Enter a Number");
if(fiveMult%5===0){
  console.log("Yes, Divisible");
}
else{
    console.log("No, not Divisible");
}
let Marks = prompt("Enter Your Marks To Check Grade: ");
if(Marks>=80){
  console.log("A grade");
}
else if(Marks>=70&&Marks<=79){
  console.log("B grade");
}
else if(Marks>=60&&Marks<=69){
  console.log("C grade");
}
else if(Marks>=50&&Marks<=59){
  console.log("D grade");
}
else{
  console.log("F grade");
}
let greet = prompt("Enter a Greeting: ");
console.log(greet);