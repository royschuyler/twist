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
// function split1(d,ax,ay,bx,by){
//   var m = ((ay-by)/(ax-bx));
//   var b = ay-(m*ax);
//   var xUse = (ax-bx)/d;
//   var obj = {
//     x: [],
//     y: []
//   }
//   for(i=0;i<=d;i++){
//     var x = ax-(xUse*i);
//     var y = (m*x)+b;
//     obj.x.push(x);
//     obj.y.push(y);
//   }return obj
// }


// function plotV(d,A,B,count){
//   var smStr = '';
//   for(i=0;i<d;i++){
//     smStr += 'newbuffer ' + '</br>';
//     smStr += 'addvalue ' + count + ' ' + A.x[i] + ' ' + A.y[i] + '</br>';
//     smStr += 'addvalue ' + count + ' ' + B.x[i] + ' ' + B.y[i] + '</br>';
//     count += 1
//   }
//   return smStr
// }

// function regulate(d,start){
//   var arr = [];
//   for(i=0;i<d;i++){
//     if(start*i<=360){
//       arr.push(start*i);
//     }
//     if(start*i>360){
//       var multiplier = Math.floor((start*i/360) % 360);
//       arr.push((start*i)-(360*multiplier))
//     }
//   }return arr
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
//     },
//     objB:{
//       x: [],
//       y: []
//     },
//     objC:{
//       x: [],
//       y: []
//     },
//     objD:{
//       x: [],
//       y: []
//     },
//     reverse: {
//       objC:{
//         x: [],
//         y: []
//       },
//       objD:{
//         x: [],
//         y: []
//       }
//     }
//   }

//   obj.objA.x = split1(d,obj.p1.x,obj.p1.y,obj.p2.x,obj.p2.y).x;
//   obj.objA.y = split1(d,obj.p1.x,obj.p1.y,obj.p2.x,obj.p2.y).y;
//   obj.objB.x = split1(d,obj.p2.x,obj.p2.y,obj.p3.x,obj.p3.y).x;
//   obj.objB.y = split1(d,obj.p2.x,obj.p2.y,obj.p3.x,obj.p3.y).y;
//   obj.objC.x = split1(d,obj.p3.x,obj.p3.y,obj.p4.x,obj.p4.y).x;
//   obj.objC.y = split1(d,obj.p3.x,obj.p3.y,obj.p4.x,obj.p4.y).y;
//   obj.objD.x = split1(d,obj.p4.x,obj.p4.y,obj.p1.x,obj.p1.y).x;
//   obj.objD.y = split1(d,obj.p4.x,obj.p4.y,obj.p1.x,obj.p1.y).y;
//   obj.reverse.objC.x = obj.objC.x.reverse();
//   obj.reverse.objC.y = obj.objC.y.reverse();
//   obj.reverse.objD.x = obj.objD.x.reverse();
//   obj.reverse.objD.y = obj.objD.y.reverse();



//   return obj
// }



// function makeOne(d,pointsA,pointsB){

//   var str = '</br>' + 'new' + '</br>' + 'newbuffer ' + '</br>';
//   var count = 0;

//   str += plotV(d,pointsA.objA, pointsB.objA,count);
//   count+=d
//   str += plotV(d,pointsA.objB, pointsB.objB,count);
//   count+=d
//   str += plotV(d,pointsA.objC, pointsB.objC,count);
//   count+=d
//   str += plotV(d,pointsA.objD, pointsB.objD,count);
//   count+=d
//   str += plotV(d,pointsA.objA, pointsA.reverse.objC,count);
//   count+=d
//   str += plotV(d,pointsB.objB, pointsB.reverse.objD,count);

//   var extra = 'windowsize 700 700' + '</br>' + 'blinewidth 1 all' + '</br>' + 'drawframe no' + '</br>' + 'asetticks x no' + '</br>' + 'asetticks y no' + '</br>' + 'asetminticks x no' + '</br>' + 'asetminticks y no' + '</br>' +'framewidth 0' + '</br>' + 'bstyle yes no no no no no no yes no no 0' + '</br>' + 'margins 0 0 0 0' + '</br>' + 'range x '  + -plotSize + ' ' + plotSize + '</br>' + 'range y ' + -plotSize + ' ' + plotSize;
//   str += extra

//   return str
// }


// var plotSize = 7;
// var d = 50;
// var H = 5;
// var H2 = 4.5;
// var F = 20;
// var L = 1;

// var start = 0;

// var text = '';

// for(j=0;j<5;j++){
//   var pointsA = getPoints(d,start,H,F,L);
//   var pointsB = getPoints(d,start,H2,F,L);
//   text += makeOne(d,pointsA,pointsB);
//   var loc = '</br>' + 'savejpg /Users/royschuyler/Desktop/auto9/' + j + '.jpg 2' + '</br>' + 'close' + '</br>';
//   text += loc;
//   start += 72;
// }


// var element = document.getElementById('p1');
// element.innerHTML = text + '</br>';
// var hiddenElement = document.createElement('a');



