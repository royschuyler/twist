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

// function split2(d,ax,ay,bx,by){
//   var m = ((ay-by)/(ax-bx));
//   var b = ay-(m*ax);
//   var xUse = (ax-bx)/d;
//   var obj = {
//     x: [],
//     y: []
//   }
//   for(i=0;i<=d;i++){
//     var x = ax+(xUse*i);
//     var y = (m*x)+b;
//     obj.x.push(x);
//     obj.y.push(y);
//   }return obj
// }


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
  }

obj.objA.x = split1(d,obj.p1.x,obj.p1.y,obj.p2.x,obj.p2.y).x;
obj.objA.y = split1(d,obj.p1.x,obj.p1.y,obj.p2.x,obj.p2.y).y;
obj.objB.x = split1(d,obj.p2.x,obj.p2.y,obj.p3.x,obj.p3.y).x;
obj.objB.y = split1(d,obj.p2.x,obj.p2.y,obj.p3.x,obj.p3.y).y;
obj.objC.x = split1(d,obj.p3.x,obj.p3.y,obj.p4.x,obj.p4.y).x;
obj.objC.y = split1(d,obj.p3.x,obj.p3.y,obj.p4.x,obj.p4.y).y;
obj.objD.x = split1(d,obj.p4.x,obj.p4.y,obj.p1.x,obj.p1.y).x;
obj.objD.y = split1(d,obj.p4.x,obj.p4.y,obj.p1.x,obj.p1.y).y;


  return obj
}


// var text = '';
// var newbuffer = 'new' + '</br>' + 'newbuffer ' + '</br>';
// var value = '';




function makeOne(points){

  var count = 0;
  var str = '</br>' + 'new' + '</br>' + 'newbuffer ' + '</br>';

  for(i=0;i<=d;i++){

    if(points.objA.x[i+1] != undefined){
      str += 'newbuffer ' + '</br>';
      str += 'addvalue ' + count + ' ' + points.objA.x[i] + ' ' + points.objA.y[i] + '</br>';
      str += 'addvalue ' + count + ' ' + points.objA.x[i+1] + ' ' + points.objA.y[i+1] + '</br>';
      count+=1
    }
  }

  for(i=0;i<=d;i++){

    if(points.objB.x[i+1] != undefined){
      str += 'newbuffer ' + '</br>' + 'newbuffer ' + '</br>';
      str += 'addvalue ' + count + ' ' + points.objB.x[i] + ' ' + points.objB.y[i] + '</br>';
      str += 'addvalue ' + count + ' ' + points.objB.x[i+1] + ' ' + points.objB.y[i+1] + '</br>';
      count+=1
    }
  }

  for(i=0;i<=d;i++){

    if(points.objC.x[i+1] != undefined){
      str += 'newbuffer ' + '</br>' + 'newbuffer ' + '</br>';
      str += 'addvalue ' + count + ' ' + points.objC.x[i] + ' ' + points.objC.y[i] + '</br>';
      str += 'addvalue ' + count + ' ' + points.objC.x[i+1] + ' ' + points.objC.y[i+1] + '</br>';
      count+=1
    }
  }

  for(i=0;i<=d;i++){

    if(points.objD.x[i+1] != undefined){
      str += 'newbuffer ' + '</br>' + 'newbuffer ' + '</br>';
      str += 'addvalue ' + count + ' ' + points.objD.x[i] + ' ' + points.objD.y[i] + '</br>';
      str += 'addvalue ' + count + ' ' + points.objD.x[i+1] + ' ' + points.objD.y[i+1] + '</br>';
      count+=1
    }
  }


  var extra = 'windowsize 700 700' + '</br>' + 'blinewidth .2 all' + '</br>' + 'drawframe no' + '</br>' + 'asetticks x no' + '</br>' + 'asetticks y no' + '</br>' + 'asetminticks x no' + '</br>' + 'asetminticks y no' + '</br>' +'framewidth 0' + '</br>' + 'bstyle yes no no no no no no yes no no 0' + '</br>' + 'margins 0 0 0 0' + '</br>' + 'range x '  + -plotSize + ' ' + plotSize + '</br>' + 'range y ' + -plotSize + ' ' + plotSize;
  str += extra
  //var loc = '</br>' + 'savejpg /Users/royschuyler/Desktop/auto9/' + j + '.jpg 2' + '</br>' + 'close' + '</br>';
  //var end = newbuffer + value + extra;


return str
} //end function


var plotSize = 7;
var d = 10;
var H = 5;
var newH = 4.5;
var F = 20;
var L = 1;

var start = 0;

var text = '';

for(j=0;j<10;j++){
  var points = getPoints(d,start,H,F,L);
  text += makeOne(points);
  var loc = '</br>' + 'savejpg /Users/royschuyler/Desktop/auto9/' + j + '.jpg 2' + '</br>' + 'close' + '</br>';
  text += loc;
  start += 36;
}


var element = document.getElementById('p1');
element.innerHTML = text + '</br>';
var hiddenElement = document.createElement('a');



