//global scoped
let k = 5;
console.log(k);


//block scoped
{
  var b = 44;
  console.log(b); 
} 
//block scoped
{
  const a = 11;
  console.log(a);
}
// blockscoped
{
  let b = 12;
  console.log(b);
}
/*can be host

console.log(b);

let b = 12;
*/
// Rediclare
var a = 10;
var a = 15;
var a =30;
console.log(a);
// reassign
{
  let c = 20;
  console.log(c);
}
// function scopped
function kishore() {
  let name = "Minato";
  console.log(name);
}
kishore();
function dhanya() {
  let name= "dhanya sri";
  console.log(name);
}
dhanya();