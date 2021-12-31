class Ground 
{
  constructor(x, y, w, h) 
  {
    var options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(myworld, this.body);
  }

  show() {
    //var pos = this.body.position;
    
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(this.body.position.x, this.body.position.y, this.w, this.h);
    
  }
  
}


