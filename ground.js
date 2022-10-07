 class Ground 
 {
    constructor (x,y,w,h)
    {
        var ground_op = {
            isStatic:true
        }
       
    this.body = Bodies.rectangle(x,y,w,h,ground_op);
    this.w =  w;
    this.h =  h;
    this.x = x;
    this.y = y;

    World .add(world,this.body);

    }

    show()
    {
     var pos = this.body.position;
     push();
     translate (pos.x,pos.y)
     rectMode(CENTER);
     fill(255,255,0) ;
     stroke(257);
     rect(0,0,this.w,this.h);
     pop();




    }
 }