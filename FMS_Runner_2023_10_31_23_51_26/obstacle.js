class Obstacle{
  
  constructor(){
    this.h = 15;
    this.w = 20;
    this.x = width;
    this.y = height - this.h;
  }
  
  move(){
    this.x -= 8;
  }
  
  show(){
    rect(this.x,this.y,this.w,this.h);
    
  }
  
}