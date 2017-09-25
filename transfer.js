  if(this.high.H >= 0 && this.low.H >= 0){

    if(this.start>=315 || this.start<45){
      this.str += plotV(d,this.high.D, this.low.D,count,color5);
      count+=d
      this.str += plotV(d,this.high.A, this.low.A,count,color4);
      count+=d
      this.str += plotV(d,this.low.B, this.low.reverse.D,count,color6);
    }

    if(this.start>=45 && this.start<135){
      this.str += plotV(d,this.high.C, this.low.C,count,color4);
      count+=d
      this.str += plotV(d,this.high.D, this.low.D,count,color5);
      count+=d
      this.str += plotV(d,this.low.B, this.low.reverse.D,count,color6);
    }

    if(this.start>=135 && this.start<225){
      this.str += plotV(d,this.high.B, this.low.B,count,color5);
      count+=d
      this.str += plotV(d,this.high.C, this.low.C,count,color4);
      count+=d
      this.str += plotV(d,this.low.B, this.low.reverse.D,count,color6);
    }

    if(this.start>=225 && this.start<315){
      this.str += plotV(d,this.high.A, this.low.A,count,color4);
      count+=d
      this.str += plotV(d,this.high.B, this.low.B,count,color5);
      count+=d
      this.str += plotV(d,this.low.B, this.low.reverse.D,count,color6);
    }
  }

  if(this.high.H < 0 && this.low.H < 0){

    if(this.start>=315 || this.start<45){
      this.str += plotV(d,this.high.D, this.low.D,count,color5);
      count+=d
      this.str += plotV(d,this.high.A, this.low.A,count,color4);
      count+=d
      this.str += plotV(d,this.high.A, this.high.reverse.C,count,color6);

    }

    if(this.start>=45 && this.start<135){
      this.str += plotV(d,this.high.C, this.low.C,count,color4);
      count+=d
      this.str += plotV(d,this.high.D, this.low.D,count,color5);
      count+=d
      this.str += plotV(d,this.high.A, this.high.reverse.C,count,color6);
    }

    if(this.start>=135 && this.start<225){
      this.str += plotV(d,this.high.B, this.low.B,count,color5);
      count+=d
      this.str += plotV(d,this.high.C, this.low.C,count,color4);
      count+=d
      this.str += plotV(d,this.high.A, this.high.reverse.C,count,color6);
    }

    if(this.start>=225 && this.start<315){
      this.str += plotV(d,this.high.A, this.low.A,count,color4);
      count+=d
      this.str += plotV(d,this.high.B, this.low.B,count,color5);
      count+=d
      this.str += plotV(d,this.high.A, this.high.reverse.C,count,color6);
    }
  }

  if(this.high.H >= 0 && this.low.H <= 0){

    if(this.start>=315 || this.start<45){
      this.str += plotV(d,this.high.A, this.high.reverse.C,count,color6);
      count+=d
      this.str += plotV(d,this.high.D, this.low.D,count,color5);
      count+=d
      this.str += plotV(d,this.high.A, this.low.A,count,color4);
    }

    if(this.start>=45 && this.start<135){
      this.str += plotV(d,this.high.A, this.high.reverse.C,count,color6);
      count+=d
      this.str += plotV(d,this.high.C, this.low.C,count,color4);
      count+=d
      this.str += plotV(d,this.high.D, this.low.D,count,color5);
    }

    if(this.start>=135 && this.start<225){
      this.str += plotV(d,this.high.A, this.high.reverse.C,count,color6);
      count+=d
      this.str += plotV(d,this.high.B, this.low.B,count,color5);
      count+=d
      this.str += plotV(d,this.high.C, this.low.C,count,color4);
    }

    if(this.start>=225 && this.start<315){
      this.str += plotV(d,this.high.A, this.high.reverse.C,count,color6);
      count+=d
      this.str += plotV(d,this.high.A, this.low.A,count,color4);
      count+=d
      this.str += plotV(d,this.high.B, this.low.B,count,color5);
    }
  }
}
