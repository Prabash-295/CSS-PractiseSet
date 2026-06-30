let n = prompt("Enter n value: ");

let arr= [];

for(let i=1;i<=n;i++){
  arr[i-1]=i;
}
let output=arr.reduce((prev, curr) => {
  return (prev * curr);
})

console.log(output);