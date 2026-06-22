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
let mode = "dark-mode";
let colour;
if(mode==="dark-mode"){
  colour="black";
}
else{
  colour="white";
}
console.log(colour);