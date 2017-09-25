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

function multipleStart(H1,H2,move,base){
  text += '</br>' + 'new' + '</br>' + 'newbuffer ' + '</br>';
  var start = regulate(base);
  var pointsA = getPoints(d,start,H1,F,L);
  var pointsB = getPoints(d,start,H2,F,L);
  text += makeOne(count,d,pointsA,pointsB,start,H1,H2);
  //base += move;
  count+=1
//count += d*3
}

function multiple(H1,H2,move,base){
  text += '</br>' + '</br>' + 'newbuffer ' + '</br>';
  var start = regulate(base);
  var pointsA = getPoints(d,start,H1,F,L);
  var pointsB = getPoints(d,start,H2,F,L);
  text += makeOne(count,d,pointsA,pointsB,start,H1,H2);
  //base += move;
  count+=1
//count += d*3
}

function multipleEnd(H1,H2,move,base){
  text += '</br>' + 'newbuffer' + '</br>';
  var start = regulate(base);
  var pointsA = getPoints(d,start,H1,F,L);
  var pointsB = getPoints(d,start,H2,F,L);
  text += makeOne(count,d,pointsA,pointsB,start,H1,H2);
  var loc = '</br>' + 'savejpg /Users/royschuyler/Desktop/auto8/' + z + '.jpg 2' + '</br>' + 'close' + '</br>';
  var extra = 'windowsize 700 700' + '</br>' + 'blinewidth 2 all' + '</br>' + 'drawframe no' + '</br>' + 'asetticks x no' + '</br>' + 'asetticks y no' + '</br>' + 'asetminticks x no' + '</br>' + 'asetminticks y no' + '</br>' +'framewidth 0' + '</br>' + 'bstyle yes no no no no no no yes no no 0' + '</br>' + 'margins 0 0 0 0' + '</br>' + 'range x '  + -plotSize + ' ' + plotSize + '</br>' + 'range y ' + -plotSize + ' ' + plotSize;
  text += extra
  text += loc;
  //base += move;
  count+=1
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


function shell(d,start,H,F,L){
  this.d = d;
  this.start = start;
  this.H = H;
  this.F = F;
  this.L = L;
  this.M = -(H/F);
  this.r1 = radians(start);
  this.r2 = radians(start+90);
  this.r3 = radians(start+180);
  this.r4 = radians(start+270);
  this.t1 = atan(this.M);
  this.t2 = atan((((this.M*this.L)+this.H))/(this.F+this.L));
  this.HD = tan(this.t2)*this.F;
  this.e = 1/(this.L/(this.H-this.HD));
  this.c = this.H-(this.L*this.e);
  this.p1 = {
    x: sin(this.r1)*this.L,
    y: (this.L*this.e*cos(this.r1))+this.c
  };
  this.p2 = {
    x: sin(this.r2)*this.L,
    y: (this.L*this.e*cos(this.r2))+this.c
  };
  this.p3 = {
    x: sin(this.r3)*this.L,
    y: (this.L*this.e*cos(this.r3))+this.c
  };
  this.p4 = {
    x: sin(this.r4)*this.L,
    y: (this.L*this.e*cos(this.r4))+this.c
  };
  this.A = {
    x: split1(this.d,this.p1.x,this.p1.y,this.p2.x,this.p2.y).x,
    y: split1(this.d,this.p1.x,this.p1.y,this.p2.x,this.p2.y).y
  },
  this.B = {
    x: split1(this.d,this.p2.x,this.p2.y,this.p3.x,this.p3.y).x,
    y: split1(this.d,this.p2.x,this.p2.y,this.p3.x,this.p3.y).y
  },
  this.C = {
    x: split1(this.d,this.p3.x,this.p3.y,this.p4.x,this.p4.y).x,
    y: split1(this.d,this.p3.x,this.p3.y,this.p4.x,this.p4.y).y
  },
  this.D = {
    x: split1(this.d,this.p4.x,this.p4.y,this.p1.x,this.p1.y).x,
    y: split1(this.d,this.p4.x,this.p4.y,this.p1.x,this.p1.y).y
  },
  this.reverse = {
    A: {
      x: this.A.x.reverse(),
      y: this.A.y.reverse()
    },
    B: {
      x: this.B.x.reverse(),
      y: this.B.y.reverse()
    },
    C: {
      x: this.C.x.reverse(),
      y: this.C.y.reverse()
    },
    D: {
      x: this.D.x.reverse(),
      y: this.D.y.reverse()
    }
  }
}

function two(high,low){
  this.high = high;
  this.low = low;
}

var first = new shell(10,1,5,20,1);
var second = new shell(10,1,4.5,20,1);

var both = new two(first,second);
console.log(both);



// function makeOne(count,d,pointsA,pointsB,start,H,H2){

//   var str = '';

//   var color1 = [209/255,5/255,0];//red
//   var color2 = [13/255,30/255,148/255];//blue
//   var color3 = [0,118/255,18/255];//green
//   var color4 = [226/255,153/255,0];//yellow
//   var color5 = [75/255,0,130/255];//purple
//   var color6 = [0,0,0];
//   var color7 = [0,0,0];

//   if(H >= 0 && H2 >= 0){

//     if(start>=315 || start<45){
//       str += plotV(d,pointsA.objD, pointsB.objD,count,color5);
//       count+=d
//       str += plotV(d,pointsA.objA, pointsB.objA,count,color4);
//       count+=d
//       str += plotV(d,pointsB.objB, pointsB.reverse.objD,count,color6);
//     }

//     if(start>=45 && start<135){
//       str += plotV(d,pointsA.objC, pointsB.objC,count,color4);
//       count+=d
//       str += plotV(d,pointsA.objD, pointsB.objD,count,color5);
//       count+=d
//       str += plotV(d,pointsB.objB, pointsB.reverse.objD,count,color6);
//     }

//     if(start>=135 && start<225){
//       str += plotV(d,pointsA.objB, pointsB.objB,count,color5);
//       count+=d
//       str += plotV(d,pointsA.objC, pointsB.objC,count,color4);
//       count+=d
//       str += plotV(d,pointsB.objB, pointsB.reverse.objD,count,color6);
//     }

//     if(start>=225 && start<315){
//       str += plotV(d,pointsA.objA, pointsB.objA,count,color4);
//       count+=d
//       str += plotV(d,pointsA.objB, pointsB.objB,count,color5);
//       count+=d
//       str += plotV(d,pointsB.objB, pointsB.reverse.objD,count,color6);
//     }
//   }

//   if(H < 0 && H2 < 0){

//     if(start>=315 || start<45){
//       str += plotV(d,pointsA.objD, pointsB.objD,count,color5);
//       count+=d
//       str += plotV(d,pointsA.objA, pointsB.objA,count,color4);
//       count+=d
//       str += plotV(d,pointsA.objA, pointsA.reverse.objC,count,color6);

//     }

//     if(start>=45 && start<135){
//       str += plotV(d,pointsA.objC, pointsB.objC,count,color4);
//       count+=d
//       str += plotV(d,pointsA.objD, pointsB.objD,count,color5);
//       count+=d
//       str += plotV(d,pointsA.objA, pointsA.reverse.objC,count,color6);
//     }

//     if(start>=135 && start<225){
//       str += plotV(d,pointsA.objB, pointsB.objB,count,color5);
//       count+=d
//       str += plotV(d,pointsA.objC, pointsB.objC,count,color4);
//       count+=d
//       str += plotV(d,pointsA.objA, pointsA.reverse.objC,count,color6);
//     }

//     if(start>=225 && start<315){
//       str += plotV(d,pointsA.objA, pointsB.objA,count,color4);
//       count+=d
//       str += plotV(d,pointsA.objB, pointsB.objB,count,color5);
//       count+=d
//       str += plotV(d,pointsA.objA, pointsA.reverse.objC,count,color6);
//     }
//   }

//   if(H >= 0 && H2 <= 0){

//     if(start>=315 || start<45){
//       str += plotV(d,pointsA.objA, pointsA.reverse.objC,count,color6);
//       count+=d
//       str += plotV(d,pointsA.objD, pointsB.objD,count,color5);
//       count+=d
//       str += plotV(d,pointsA.objA, pointsB.objA,count,color4);
//     }

//     if(start>=45 && start<135){
//       str += plotV(d,pointsA.objA, pointsA.reverse.objC,count,color6);
//       count+=d
//       str += plotV(d,pointsA.objC, pointsB.objC,count,color4);
//       count+=d
//       str += plotV(d,pointsA.objD, pointsB.objD,count,color5);
//     }

//     if(start>=135 && start<225){
//       str += plotV(d,pointsA.objA, pointsA.reverse.objC,count,color6);
//       count+=d
//       str += plotV(d,pointsA.objB, pointsB.objB,count,color5);
//       count+=d
//       str += plotV(d,pointsA.objC, pointsB.objC,count,color4);
//     }

//     if(start>=225 && start<315){
//       str += plotV(d,pointsA.objA, pointsA.reverse.objC,count,color6);
//       count+=d
//       str += plotV(d,pointsA.objA, pointsB.objA,count,color4);
//       count+=d
//       str += plotV(d,pointsA.objB, pointsB.objB,count,color5);
//     }
//   }
//   return str
// }

// var keep = 360;
// var plotSize = 7;
// var d = 40;
// var F = 20;
// var L = 1;

// var rounds = 50;

// var move1 = 3.6;
// var move2 = 7.2;
// var move3 = 10.8;
// var move4 = 14.4;
// var move5 = 18;
// var move6 = 21.6;
// var move7 = 25.2;
// var move8 = 28.8;
// var move9 = 32.4;
// var move10 = 36;
// var move11 = 39.6;
// var move12 = 43.2;
// var move13 = 39.6;
// var move14 = 36;
// var move15 = 32.4;
// var move16 = 28.8;
// var move17 = 25.2;
// var move18 = 21.6;
// var move19 = 18;
// var move20 = 14.4;
// var move21 = 10.8;
// var move22 = 7.2;
// var move23 = 3.6;
// var moveE = 3.6;

// var base = 0;
// var base1 = 0;
// var base2 = 0;
// var base3 = 0;
// var base4 = 0;
// var base5 = 0;
// var base6 = 0;
// var base7 = 0;
// var base8 = 0;
// var base9 = 0;
// var base10 = 0;
// var base11 = 0;
// var base12 = 0;
// var base13 = 0;
// var base14 = 0;
// var base15 = 0;
// var base16 = 0;
// var base17 = 0;
// var base18 = 0;
// var base19 = 0;
// var base20 = 0;
// var base21 = 0;
// var base22 = 0;
// var base23 = 0;
// var baseE = 0;

// var count = 0;
// var text = '';

// for(z=0;z<rounds;z++){
//   multipleStart(-5,-5.25,move2,base2);
//   count += d*3
//   multiple(-4.5,-4.75,move3,base3);
//   count += d*3
//   multiple(-4,-4.25,move4,base4);
//   count += d*3
//   multiple(-3.5,-3.75,move5,base5);
//   count += d*3
//   multiple(-3,-3.25,move6,base6);
//   count += d*3
//   multiple(-2.5,-2.75,move7,base7);
//   count += d*3
//   multiple(-2,-2.25,move8,base8);
//   count += d*3
//   multiple(-1.5,-1.75,move9,base9);
//   count += d*3
//   multiple(-1,-1.25,move10,base10);
//   count += d*3
//   multiple(-0.5,-0.75,move11,base11);
//   count += d*3
//   multiple(0,-0.25,move12,base12);
//   count += d*3
//   multiple(6,5.75,moveE,baseE);
//   count += d*3
//   multiple(5.5,5.25,move23,base23);
//   count += d*3
//   multiple(5,4.75,move22,base22);
//   count += d*3
//   multiple(4.5,4.25,move21,base21);
//   count += d*3
//   multiple(4,3.75,move20,base20);
//   count += d*3
//   multiple(3.5,3.25,move19,base19);
//   count += d*3
//   multiple(3,2.75,move18,base18);
//   count += d*3
//   multiple(2.5,2.25,move17,base17);
//   count += d*3
//   multiple(2,1.75,move16,base16);
//   count += d*3
//   multiple(1.5,1.25,move15,base15);
//   count += d*3
//   multiple(1,0.75,move14,base14);
//   count += d*3
//   multipleEnd(0.5,0.25,move13,base13);

//   count = 0;

//   base1 += move1;
//   base2 += move2;
//   base3 += move3;
//   base4 += move4;
//   base5 += move5;
//   base6 += move6;
//   base7 += move7;
//   base8 += move8;
//   base9 += move9;
//   base10 += move10;
//   base11 += move11;
//   base12 += move12;
//   base13 += move13;
//   base14 += move14;
//   base15 += move15;
//   base16 += move16;
//   base17 += move17;
//   base18 += move18;
//   base19 += move19;
//   base20 += move20;
//   base21 += move21;
//   base22 += move22;
//   base23 += move23;
//   baseE += moveE;
// }






// var element = document.getElementById('p1');
// element.innerHTML = text + '</br>';
// var hiddenElement = document.createElement('a');



