//MATH******************************************************
function radians(degrees) {
  return degrees * Math.PI / 180;
};

function sqrt(n){
  return Math.sqrt(n)
}

function square(x){
  return Math.pow(x,2)
}

function abs(n){
  return Math.abs(n)
}

//TRIG******************************************************
function sin (x) {
  return Math.sin(x)
}

function cos (x) {
  return Math.cos(x)
}

function tan (x) {
  return Math.tan(x)
}

function asin (x) {
  return Math.asin(x)
}

function acos (x) {
  return Math.cos(x)
}

function atan (x) {
  return Math.atan(x)
}

function cot (x) {
  return 1/Math.tan(x)
}


var H = 5;
var F = 20;
var L = 1;

function getA(H,F,L){
  var M = -(H/F);
  var t1 = atan(M);
  var t2 = atan((((M*L)+H))/(F+L));
  var H2 = tan(t2)*F;
  var A = L/(H-H2);
  return A;
}

var a = getA(H,F,L);
console.log(a)


console.log("hello world")
