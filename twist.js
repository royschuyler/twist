// //MATH******************************************************
// function radians(degrees) {
//   return degrees * Math.PI / 180;
// };

// function sqrt(n){
//   return Math.sqrt(n)
// }

// function square(x){
//   return Math.pow(x,2)
// }

// function abs(n){
//   return Math.abs(n)
// }

// //TRIG******************************************************
// function sin (x) {
//   return Math.sin(x)
// }

// function cos (x) {
//   return Math.cos(x)
// }

// function tan (x) {
//   return Math.tan(x)
// }

// function asin (x) {
//   return Math.asin(x)
// }

// function acos (x) {
//   return Math.cos(x)
// }

// function atan (x) {
//   return Math.atan(x)
// }

// function cot (x) {
//   return 1/Math.tan(x)
// }


// //********************************************************************
// function split(d,ax,ay,bx,by){
//   var m = -((by-ay)/(bx-ax));
//   var b = ay-(m*ax);
//   var xUse = (ax-bx)/d;
//   var obj = {
//     x: [],
//     y: []
//   }
//   for(i=0;i<=d;i++){
//     var x = xUse*i;
//     var y = (m*x)+b;
//     obj.x.push(x);
//     obj.y.push(y);
//   }return obj
// }


// //********************************************************************

// function getPoints(d,start,H,F,L){
//   var use = start;
//   var p1 = radians(use);
//   var p2 = radians(use + 90);
//   var p3 = radians(use + 180);
//   var p4 = radians(use + 270);

//   var M = -(H/F);
//   var t1 = atan(M);
//   var t2 = atan((((M*L)+H))/(F+L));
//   var H2 = tan(t2)*F;
//   var a = L/(H-H2);
//   var e = 1/a;
//   var c = H-(L*e);

//   var obj = {
//     a: a,
//     e: e,
//     c: c,
//     p1: {
//       x: sin(p1)*L,
//       y: (L*e*cos(p1))+c
//     },
//     p2: {
//       x: sin(p2)*L,
//       y: (L*e*cos(p2))+c
//     },
//     p3: {
//       x: sin(p3)*L,
//       y: (L*e*cos(p3))+c
//     },
//     p4: {
//       x: sin(p4)*L,
//       y: (L*e*cos(p4))+c
//     },
//     objA:{
//       x: [],
//       y: []
//     }
//   }


// obj.objA.x = split(d,obj.p1.x,obj.p1.y,obj.p2.x,obj.p2.y).x;
// obj.objA.y = split(d,obj.p1.x,obj.p1.y,obj.p2.x,obj.p2.y).y;




//   return obj
// }


// var text = '';

// var d = 100;
// var H = 5;
// var newH = 4.5;
// var F = 20;
// var L = 1;
// var start = 0;

// for(i=0;i<1;i++){
//   var points = getPoints(d,start,H,F,L);
//   var points2 = getPoints(d,start,newH,F,L);
//   console.log(points)

//   var newbuffer = 'new' + '</br>' + 'newbuffer ' + '</br>' + 'newbuffer ' + '</br>';
//   var value =  'addvalue ' + 0 + ' ' + points.p1.x + ' ' + points.p1.y + '</br>';
//       value += 'addvalue ' + 0 + ' ' + points.p2.x + ' ' + points.p2.y + '</br>';
//       value += 'addvalue ' + 0 + ' ' + points.p3.x + ' ' + points.p3.y + '</br>';
//       value += 'addvalue ' + 0 + ' ' + points.p4.x + ' ' + points.p4.y + '</br>';
//       value += 'addvalue ' + 0 + ' ' + points.p1.x + ' ' + points.p1.y + '</br>';

//       value += 'addvalue ' + 1 + ' ' + points2.p1.x + ' ' + points2.p1.y + '</br>';
//       value += 'addvalue ' + 1 + ' ' + points2.p2.x + ' ' + points2.p2.y + '</br>';
//       value += 'addvalue ' + 1 + ' ' + points2.p3.x + ' ' + points2.p3.y + '</br>';
//       value += 'addvalue ' + 1 + ' ' + points2.p4.x + ' ' + points2.p4.y + '</br>';
//       value += 'addvalue ' + 1 + ' ' + points2.p1.x + ' ' + points2.p1.y + '</br>';

//   var plotSize = 7;
//   var extra = 'windowsize 700 700' + '</br>' + 'blinewidth 2 all' + '</br>' + 'drawframe no' + '</br>' + 'asetticks x no' + '</br>' + 'asetticks y no' + '</br>' + 'asetminticks x no' + '</br>' + 'asetminticks y no' + '</br>' +'framewidth 0' + '</br>' + 'bstyle yes no no no no no no yes no no 0' + '</br>' + 'margins 0 0 0 0' + '</br>' + 'range x '  + -plotSize + ' ' + plotSize + '</br>' + 'range y ' + -plotSize + ' ' + plotSize;
//   var loc = '</br>' + 'savejpg /Users/royschuyler/Desktop/auto9/' + i + '.jpg 2' + '</br>' + 'close' + '</br>';
//   var end = newbuffer + value + extra + loc;
//   start+=10
//   text += end
// }

// var element = document.getElementById('p1');
// element.innerHTML = text + '</br>';
// var hiddenElement = document.createElement('a');



