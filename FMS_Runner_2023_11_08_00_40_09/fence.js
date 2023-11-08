class Fence {
  
  constructor() {
    this.r = 70;
    this.x = width;
    this.y = 155;
  }
  move(){
    this.x -= 6;
  }
  
  show(){
    //circle(this.x + 35,this.y+40,30);
    image(fence1,this.x,this.y,this.r,this.r);
  }
  
}