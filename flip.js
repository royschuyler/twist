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


//********************************************************************
function split1(d,ax,ay,bx,by){
  var m = ((ay-by)/(ax-bx));
  var b = ay-(m*ax);
  var xUse = (ax-bx)/d;
  var obj = {
    x: [],
    y: []
  }
  for(i=0;i<=d;i++){
    var x = ax-(xUse*i);
    var y = (m*x)+b;
    obj.x.push(x);
    obj.y.push(y);
  }return obj
}


function plotV(d,A,B,count,color){
  var smStr = '';
  for(i=0;i<d;i++){

    smStr += 'newbuffer ' + '</br>';
    smStr += 'addvalue ' + count + ' ' + A.x[i] + ' ' + A.y[i] + '</br>';
    smStr += 'addvalue ' + count + ' ' + B.x[i] + ' ' + B.y[i] + '</br>';

    smStr += 'colormode ' + 0 + '</br>';
    smStr += 'bcolor ' + color[0] + ' ' + color[1] + ' ' + color[2] + ' ' + count + '</br>';
    count += 1
  }
  return smStr
}

function multipleStart(H1,H2){
  for(j=0;j<1;j++){
    text += '</br>' + 'new' + '</br>' + 'newbuffer ' + '</br>';
    var start = regulate(base);
    var pointsA = getPoints(d,start,H1,F,L);
    var pointsB = getPoints(d,start,H2,F,L);
    text += makeOne(count,d,pointsA,pointsB,start,H1,H2);
    base += 18;
    count+=1
  }
  base = 0;
  count += d*3
}

function multiple(H1,H2){
  for(j=0;j<1;j++){
    text += '</br>' + '</br>' + 'newbuffer ' + '</br>';
    var start = regulate(base);
    var pointsA = getPoints(d,start,H1,F,L);
    var pointsB = getPoints(d,start,H2,F,L);
    text += makeOne(count,d,pointsA,pointsB,start,H1,H2);
    base += 18;
    count+=1
  }
  base = 0;
  count += d*3
}

function multipleEnd(H1,H2){
  for(j=0;j<1;j++){
    text += '</br>' + 'newbuffer' + '</br>';
    var start = regulate(base);
    var pointsA = getPoints(d,start,H1,F,L);
    var pointsB = getPoints(d,start,H2,F,L);
    text += makeOne(count,d,pointsA,pointsB,start,H1,H2);
    var loc = '</br>' + 'savejpg /Users/royschuyler/Desktop/auto9/' + j + '.jpg 2' + '</br>' + 'close' + '</br>';
    var extra = 'windowsize 700 700' + '</br>' + 'blinewidth 2 all' + '</br>' + 'drawframe no' + '</br>' + 'asetticks x no' + '</br>' + 'asetticks y no' + '</br>' + 'asetminticks x no' + '</br>' + 'asetminticks y no' + '</br>' +'framewidth 0' + '</br>' + 'bstyle yes no no no no no no yes no no 0' + '</br>' + 'margins 0 0 0 0' + '</br>' + 'range x '  + -plotSize + ' ' + plotSize + '</br>' + 'range y ' + -plotSize + ' ' + plotSize;
    text += extra
    //text += loc;
    base += 18;
    count+=1
  }
}

function regulateArr(d,start){
  var arr = [];
  for(i=0;i<d;i++){
    if(start*i<=360){
      arr.push(start*i);
    }
    if(start*i>360){
      var multiplier = Math.floor((start*i/360) % 360);
      arr.push((start*i)-(360*multiplier))
    }
  }return arr
}

function regulate(start){
  var real;
  if(start<=360){
    real = start;
  }else {
    var multiplier = Math.floor((start/360) % 360);
    real = start-(360*multiplier)
  }return real
}



//********************************************************************

function getPoints(d,start,H,F,L){
  var use = start;
  var p1 = radians(use);
  var p2 = radians(use + 90);
  var p3 = radians(use + 180);
  var p4 = radians(use + 270);

  var M = -(H/F);
  var t1 = atan(M);
  var t2 = atan((((M*L)+H))/(F+L));
  var H2 = tan(t2)*F;
  var a = L/(H-H2);
  var e = 1/a;
  var c = H-(L*e);

  var obj = {
    a: a,
    e: e,
    c: c,
    p1: {
      x: sin(p1)*L,
      y: (L*e*cos(p1))+c
    },
    p2: {
      x: sin(p2)*L,
      y: (L*e*cos(p2))+c
    },
    p3: {
      x: sin(p3)*L,
      y: (L*e*cos(p3))+c
    },
    p4: {
      x: sin(p4)*L,
      y: (L*e*cos(p4))+c
    },
    objA:{
      x: [],
      y: []
    },
    objB:{
      x: [],
      y: []
    },
    objC:{
      x: [],
      y: []
    },
    objD:{
      x: [],
      y: []
    },
    reverse: {
      objC:{
        x: [],
        y: []
      },
      objD:{
        x: [],
        y: []
      }
    }
  }

  obj.objA.x = split1(d,obj.p1.x,obj.p1.y,obj.p2.x,obj.p2.y).x;
  obj.objA.y = split1(d,obj.p1.x,obj.p1.y,obj.p2.x,obj.p2.y).y;
  obj.objB.x = split1(d,obj.p2.x,obj.p2.y,obj.p3.x,obj.p3.y).x;
  obj.objB.y = split1(d,obj.p2.x,obj.p2.y,obj.p3.x,obj.p3.y).y;
  obj.objC.x = split1(d,obj.p3.x,obj.p3.y,obj.p4.x,obj.p4.y).x;
  obj.objC.y = split1(d,obj.p3.x,obj.p3.y,obj.p4.x,obj.p4.y).y;
  obj.objD.x = split1(d,obj.p4.x,obj.p4.y,obj.p1.x,obj.p1.y).x;
  obj.objD.y = split1(d,obj.p4.x,obj.p4.y,obj.p1.x,obj.p1.y).y;
  obj.reverse.objC.x = obj.objC.x.reverse();
  obj.reverse.objC.y = obj.objC.y.reverse();
  obj.reverse.objD.x = obj.objD.x.reverse();
  obj.reverse.objD.y = obj.objD.y.reverse();



  return obj
}



function makeOne(count,d,pointsA,pointsB,start,H,H2){

  var str = '';
  //var count = 0;

  var color1 = [209/255,5/255,0];
  var color2 = [13/255,30/255,148/255];
  var color3 = [0,118/255,18/255];
  var color4 = [226/255,153/255,0];
  var color5 = [1,1,1];
  var color6 = [0,0,0];

  if(H >= 0 && H2 >= 0){

    if(start>=315 || start<45){
      str += plotV(d,pointsA.objD, pointsB.objD,count,color4);
      count+=d
      str += plotV(d,pointsA.objA, pointsB.objA,count,color1);
      count+=d
      str += plotV(d,pointsB.objB, pointsB.reverse.objD,count,color6);
    }

    if(start>=45 && start<135){
      str += plotV(d,pointsA.objC, pointsB.objC,count,color3);
      count+=d
      str += plotV(d,pointsA.objD, pointsB.objD,count,color4);
      count+=d
      str += plotV(d,pointsB.objB, pointsB.reverse.objD,count,color6);
    }

    if(start>=135 && start<225){
      str += plotV(d,pointsA.objB, pointsB.objB,count,color2);
      count+=d
      str += plotV(d,pointsA.objC, pointsB.objC,count,color3);
      count+=d
      str += plotV(d,pointsB.objB, pointsB.reverse.objD,count,color6);
    }

    if(start>=225 && start<315){
      str += plotV(d,pointsA.objA, pointsB.objA,count,color1);
      count+=d
      str += plotV(d,pointsA.objB, pointsB.objB,count,color2);
      count+=d
      str += plotV(d,pointsB.objB, pointsB.reverse.objD,count,color6);
    }
  }

  if(H < 0 && H2 < 0){

    if(start>=315 || start<45){
      str += plotV(d,pointsA.objD, pointsB.objD,count,color4);
      count+=d
      str += plotV(d,pointsA.objA, pointsB.objA,count,color1);
      count+=d
      str += plotV(d,pointsA.objA, pointsA.reverse.objC,count,color5);

    }

    if(start>=45 && start<135){
      str += plotV(d,pointsA.objC, pointsB.objC,count,color3);
      count+=d
      str += plotV(d,pointsA.objD, pointsB.objD,count,color4);
      count+=d
      str += plotV(d,pointsA.objA, pointsA.reverse.objC,count,color5);
    }

    if(start>=135 && start<225){
      str += plotV(d,pointsA.objB, pointsB.objB,count,color2);
      count+=d
      str += plotV(d,pointsA.objC, pointsB.objC,count,color3);
      count+=d
      str += plotV(d,pointsA.objA, pointsA.reverse.objC,count,color5);
    }

    if(start>=225 && start<315){
      str += plotV(d,pointsA.objA, pointsB.objA,count,color1);
      count+=d
      str += plotV(d,pointsA.objB, pointsB.objB,count,color2);
      count+=d
      str += plotV(d,pointsA.objA, pointsA.reverse.objC,count,color5);
    }
  }
  return str
}


var plotSize = 7;
var d = 30;
var H = -5;
var H2 = -5.5;
var H3 = 5;
var H4 = 4.5;
var F = 20;
var L = 1;

var base = 0;
var count = 0;
var count2 = d*3;
var text = '';



multipleStart(-4.8,-5);
multiple(-4.4,-4.6);
multiple(-4,-4.2);
multiple(-3.6,-3.8);
multipleEnd(-3.2,-3.4);

// for(j=0;j<1;j++){
//   var start = regulate(base);
//   var pointsA = getPoints(d,start,H3,F,L);
//   var pointsB = getPoints(d,start,H4,F,L);
//   text += makeOne(count2,d,pointsA,pointsB,start,H3,H4);

//   var loc = '</br>' + 'savejpg /Users/royschuyler/Desktop/auto9/' + j + '.jpg 2' + '</br>' + 'close' + '</br>';
//   var extra = 'windowsize 700 700' + '</br>' + 'blinewidth 2 all' + '</br>' + 'drawframe no' + '</br>' + 'asetticks x no' + '</br>' + 'asetticks y no' + '</br>' + 'asetminticks x no' + '</br>' + 'asetminticks y no' + '</br>' +'framewidth 0' + '</br>' + 'bstyle yes no no no no no no yes no no 0' + '</br>' + 'margins 0 0 0 0' + '</br>' + 'range x '  + -plotSize + ' ' + plotSize + '</br>' + 'range y ' + -plotSize + ' ' + plotSize;
//   text += extra
//   //text += loc;
//   base += 18;
//   count+=1
// }





var element = document.getElementById('p1');
element.innerHTML = text + '</br>';
var hiddenElement = document.createElement('a');



