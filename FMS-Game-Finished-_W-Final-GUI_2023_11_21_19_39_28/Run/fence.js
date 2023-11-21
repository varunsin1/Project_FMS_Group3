class Fence {
  
  constructor() {
    this.r = 73;
    this.x = width;
    this.y = 155;
  }
  move(){
    this.x -= 10;
  }
  
  show(){
    image(fence1,this.x,this.y);
    fence1.resize(this.r,0)
  }
  
}