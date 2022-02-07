var a = 10;
var b = 20;
var c = 6;
if(a > b && b > c){
  console.log("a is greater");
}
else if(b > a && b > c){
  console.log("b is greater");
}
else if (c > a && c > b){
  console.log("c is greater");
}
else{
  console.log("all are equal");
}