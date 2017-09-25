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
